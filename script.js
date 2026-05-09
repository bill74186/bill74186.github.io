document.addEventListener('DOMContentLoaded', function(){
	const ua = navigator.userAgent;
	const androidVer = parseFloat((ua.match(/Android\s([0-9.]+)/) || [])[1]) || 0;
	const isOldDevice = androidVer <= 6 || /Windows NT 6\.1/.test(ua) || /MSIE|Trident/.test(ua);

	if (!isOldDevice) return;

	const lockScroll = () => {
		document.body.style.overflow = 'hidden';
		document.documentElement.style.overflow = 'hidden';
		document.body.style.touchAction = 'none';
	};

	const unlockScroll = () => {
		document.body.style.overflow = '';
		document.documentElement.style.overflow = '';
		document.body.style.touchAction = '';
	};

	lockScroll();

	const mask = document.createElement('div');
	mask.style.cssText = `
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.65);
		z-index: 99999999;
		display: flex;
		justify-content: center;
		align-items: center;
	`;

	const popup = document.createElement('div');
	popup.className = 'intro';
	popup.style.cssText = `
		width: 310px;
		z-index: 999999999;
		margin: 0;
		text-align: center;
	`;

	popup.innerHTML = `
		<h3>设备提示 / Device Tip</h3>
		<p>当前系统版本较为老旧</p>
		<p>Your device version is outdated</p>

		<p style="margin:12px 0;">推荐配置 / Recommended</p>
		<p>✅ 安卓7+ / Win10 & Win11</p>
		<p>✅ Android7+ / Windows 10&11</p>
		<p>✅ Chrome / Edge / Safari</p>

		<p style="margin:12px 0;">老旧设备容易卡顿、滑动异常</p>
		<p>Old devices may cause lag and error</p>

		<div class="btns">
			<button onclick="history.back()">返回</button>
			<button id="btnContinue">继续</button>
		</div>
	`;

	mask.appendChild(popup);
	document.body.appendChild(mask);

	const btnContinue = document.getElementById('btnContinue');
	const handleContinue = () => {
		mask.remove();
		unlockScroll();
		btnContinue.removeEventListener('click', handleContinue);
	};
	btnContinue.addEventListener('click', handleContinue);
});

const loadDom = document.getElementById('load');
loadDom.classList.add('show');

setTimeout(() => {
	loadDom.classList.remove('show');
	setTimeout(() => loadDom.remove(), 600);
}, 300);

const UNIT_PREFIXES = ['', '', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'R', 'Q', 'X', 'W', 'V', 'U', 'S', 'A', 'B', 'C', 'D'];

const CYCLE_COLORS = [
	"#FFF8D7", "#FFED97", "#FFBB77", "#FF9224", "#FF5809", "#EA0000",
	"#FFFF37", "#F9F900", "#FFD700", "#FFC125", "#FFA500", "#FF8C00", "#FF00FF"
];

(function($) {

	function getEggConfig() {
		const defaultCfg = {
			eggCube: 8192,
			startCount: 2,
			randList: "2,4",
			animSpeed: 200,
			winGoal: 2048,
			autoFormat: true
		};

		try {
			const stored = localStorage.getItem("eggConfig");
			const userCfg = stored ? JSON.parse(stored) : null;
			return { ...defaultCfg, ...userCfg };
		} catch {
			return defaultCfg;
		}
	}

	function formatNum(num) {
		const raw = Number(num);

		if (isNaN(raw) || !isFinite(raw)) {
			return "∞";
		}

		const cfg = getEggConfig();
		if (!cfg.autoFormat) {
			return raw.toLocaleString();
		}

		let idx = 0;
		let val = raw;

		while (val >= 1000000 && idx < UNIT_PREFIXES.length - 1) {
			val /= 1000;
			idx++;
		}

		if (idx === 0) {
			return raw.toLocaleString();
		}

		return Number.isInteger(val) ? val + UNIT_PREFIXES[idx] : val.toFixed(1) + UNIT_PREFIXES[idx];
	}

	function applyCycleColor() {
		document.querySelectorAll(".box").forEach(tile => {
			const rawVal = tile.getAttribute("value");
			if (!rawVal) return;
			const numVal = Number(rawVal);

			if (numVal <= 8192) {
				tile.style.removeProperty("background-color");
				tile.style.removeProperty("color");
				tile.style.fontSize = "";
				return;
			}

			const exp = Math.floor(Math.log2(numVal));
			const baseExp = 13;
			const idx = ((exp - baseExp - 1) % CYCLE_COLORS.length + CYCLE_COLORS.length) % CYCLE_COLORS.length;

			tile.style.backgroundColor = CYCLE_COLORS[idx];
			tile.style.color = "#ffffff";
			const len = rawVal.length;
			tile.style.fontSize = `${Math.max(12, 26 - len * 1.3)}px`;
			tile.style.lineHeight = "70px";
		});
	}

	$.fn.init2048 = function(_options) {
		const _this = this;
		const cfg = getEggConfig();
		const defaults = { delay: cfg.animSpeed };
		const options = $.extend(defaults, _options);

		const dir = { up: 'up', right: 'right', down: 'down', left: 'left' };
		const CELL_SIZE = 76;
		const BORDER_OFFSET = 3;

		let board = {};
		let matrix = [];
		let boxes = [];
		let score = 0;
		const bestScoreKey = options.bestScoreKey || '2048-best';
		let bestScore = 0;
		let isCheating = 0;
		let isGameOver = false;
		let isWin = false;

		let $score = null;
		let $bestScore = null;

		const init = () => {
			$score = $('#score');
			$bestScore = $('#best-score');

			const rawBest = localStorage.getItem(bestScoreKey);
			bestScore = Number.isFinite(Number(rawBest)) ? Number(rawBest) : 0;
			$bestScore.text(formatNum(bestScore));
			resetGame();
			bind();
		};

		const cleanup = () => {
			$(window).off('keydown');
			$('#restart').off('click');
			$('#toggle-intro').off('click');
		};

		const resetGame = () => {
			const newCfg = getEggConfig();
			Object.assign(cfg, newCfg);

			boxes.forEach(box => box.remove());
			boxes = [];
			matrix = [];
			isCheating = 0;
			isGameOver = false;
			isWin = false;
			score = 0;

			$score.text(formatNum(score));
			_this.empty();
			board = $('<div>').addClass('board').appendTo(_this);

			for (let i = 0; i < 4; i++) {
				for (let j = 0; j < 4; j++) {
					matrix[i * 4 + j] = {
						top: i * CELL_SIZE,
						left: j * CELL_SIZE,
						taken: false,
						combined: false,
						value: 0
					};
					$('<div>')
						.addClass('mask')
						.css({
							left: j * CELL_SIZE + 'px',
							top: i * CELL_SIZE + 'px'
						})
						.appendTo(board);
				}
			}

			for (let i = 0; i < cfg.startCount; i++) createBox();
		};

		const cheat = () => {
			cleanup();
			_this.empty();
			resetGame();
			createBox(String(cfg.eggCube));
		};

		const createBox = (value) => {
			const emptyMatrix = matrix.filter(item => !item.taken).length;
			if (emptyMatrix === 0) return;

			const random = Math.floor(Math.random() * emptyMatrix + 1);
			let chosenIndex = 0, j = 0;
			for (; chosenIndex < matrix.length; chosenIndex++) {
				if (!matrix[chosenIndex].taken && ++j === random) {
					matrix[chosenIndex].taken = true;
					break;
				}
			}

			if (!value) {
				const numArr = cfg.randList.split(',').map(String);
				value = numArr[Math.floor(Math.random() * numArr.length)];
			}
			value = String(value);

			const showText = formatNum(value);
			const newBox = $('<div>')
				.addClass('box')
				.attr({ position: chosenIndex, value: value })
				.css({
					marginTop: matrix[chosenIndex].top + BORDER_OFFSET,
					marginLeft: matrix[chosenIndex].left + BORDER_OFFSET,
					opacity: 0
				})
				.text(showText)
				.appendTo(board)
				.animate({ opacity: 1 }, options.delay * 2);

			boxes.push(newBox);
			applyCycleColor();
		};

		const updateBoxValue = (box, value) => {
			box.attr('value', value);
			box.text(formatNum(value));
			applyCycleColor();
		};

		const combineBox = (sourceIndex, targetIndex, valueStr) => {
			const numVal = Number(valueStr);
			const _value = numVal * 2;
			score += _value;

			$score.text(formatNum(score));

			if (score > bestScore) {
				bestScore = score;
				localStorage.setItem(bestScoreKey, bestScore.toString());
				$bestScore.text(formatNum(bestScore));
			}

			const targetBox = boxes[targetIndex];
			const newValStr = String(_value);

			targetBox.css({ zIndex: 99 })
				.animate({
					width: '+=20',
					height: '+=20',
					marginTop: '-=10',
					marginLeft: '-=10'
				}, options.delay / 2, function() {
					$(this).animate({
						width: '-=20',
						height: '-=20',
						marginTop: '+=10',
						marginLeft: '+=10'
					}, options.delay / 2, function() {
						$(this).css({ zIndex: 1 });
					});
				});

			updateBoxValue(targetBox, newValStr);
			boxes[sourceIndex].remove();
			boxes.splice(sourceIndex, 1);

			if (_value === cfg.winGoal && !isWin) {
				isWin = true;
				showWin();
			}
		};

		const gameOver = () => {
			if (boxes.length !== 16) return false;

			for (let i = 0; i < 16; i++) {
				const boxA = boxes.find(b => b.attr('position') === String(i));
				if (!boxA) continue;

				if (i % 4 !== 3) {
					const boxB = boxes.find(b => b.attr('position') === String(i + 1));
					if (boxB && boxA.attr('value') === boxB.attr('value')) return false;
				}

				if (i < 12) {
					const boxB = boxes.find(b => b.attr('position') === String(i + 4));
					if (boxB && boxA.attr('value') === boxB.attr('value')) return false;
				}
			}
			return true;
		};

		const showGameOver = () => {
			isGameOver = true;
			const overlay = $('<div>').addClass('overlay')
				.append($('<h2>').text(options.textGameOver || '游戏结束'))
				.append($('<button>').text(options.textNewGame || '重新开始').click(resetGame));
			board.append(overlay);
		};

		const showWin = () => {
			const overlay = $('<div>').addClass('overlay')
				.append($('<h2>').text(options.textWin || '恭喜通关！'))
				.append($('<button>').text(options.textKeepPlaying || '继续挑战').click(() => overlay.remove()));
			board.append(overlay);
		};

		const gameRun = (direction) => {
			if (isGameOver) return;
			if (run(direction)) createBox();
			if (gameOver()) showGameOver();
		};

		const bind = () => {
			const handleKeydown = (e) => {
				if (isGameOver || e.repeat) return;
				switch (e.which) {
					case 37: e.preventDefault(); gameRun(dir.left); break;
					case 38: e.preventDefault(); gameRun(dir.up); break;
					case 39: e.preventDefault(); gameRun(dir.right); break;
					case 40: e.preventDefault(); gameRun(dir.down); break;
				}
			};

			$(window).keydown(handleKeydown);
			$('#restart').click(resetGame);
			$('#toggle-intro').click(function() {
				$('#intro').toggleClass('active');
				$(this).text($('#intro').hasClass('active') ? (options.textHide || '收起介绍') : (options.textHowToPlay || '游戏介绍'));
			});

			let sx, sy;
			const handleTouchStart = (e) => {
				if (e.touches.length > 1) return;
				sx = e.touches[0].clientX;
				sy = e.touches[0].clientY;
			};

			const handleTouchMove = (e) => e.preventDefault();

			const handleTouchEnd = (e) => {
				if (e.touches.length > 0) return;
				const dx = e.changedTouches[0].clientX - sx;
				const dy = e.changedTouches[0].clientY - sy;
				if (Math.max(Math.abs(dx), Math.abs(dy)) > 10) {
					gameRun(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? dir.right : dir.left) : (dy > 0 ? dir.down : dir.up));
				}
			};

			document.addEventListener("touchstart", handleTouchStart);
			document.addEventListener("touchmove", handleTouchMove);
			document.addEventListener("touchend", handleTouchEnd);

			$(window).on('beforeunload', () => {
				document.removeEventListener("touchstart", handleTouchStart);
				document.removeEventListener("touchmove", handleTouchMove);
				document.removeEventListener("touchend", handleTouchEnd);
				cleanup();
			});
		};

		const findBoxIndex = (pos) => {
			return boxes.findIndex(box => box.attr("position") === String(pos));
		};

		const moveBox = (boxIdx, targetPos, fromPos) => {
			boxes[boxIdx].animate({
				marginLeft: matrix[targetPos].left + BORDER_OFFSET,
				marginTop: matrix[targetPos].top + BORDER_OFFSET
			}, options.delay);
			boxes[boxIdx].attr('position', String(targetPos));
			matrix[targetPos].taken = true;
			matrix[fromPos].taken = false;
		};

		const run = (direction) => {
			let isMoved = false;
			for (let i = 0; i < 16; i++) matrix[i].combined = false;

			if (direction === "left") {
				isCheating = -1;
				for (let i = 0; i < 4; i++) {
					let empty = i * 4;
					for (let j = 0; j < 4; j++) {
						const pos = i * 4 + j;
						if (!matrix[pos].taken) continue;
						if (pos !== empty) {
							const k = findBoxIndex(pos);
							if (k === -1) continue;
							moveBox(k, empty, pos);
							isMoved = true;
						}
						if (empty > i * 4 && !matrix[empty - 1].combined) {
							const k = findBoxIndex(empty);
							const m = findBoxIndex(empty - 1);
							if (k !== -1 && m !== -1 && boxes[k].attr('value') === boxes[m].attr('value')) {
								combineBox(k, m, boxes[k].attr('value'));
								matrix[empty].taken = false;
								matrix[empty - 1].combined = true;
								empty--;
								isMoved = true;
							}
						}
						empty++;
					}
				}
			} else if (direction === "right") {
				isCheating = -1;
				for (let i = 3; i > -1; i--) {
					let empty = i * 4 + 3;
					for (let j = 3; j > -1; j--) {
						const pos = i * 4 + j;
						if (!matrix[pos].taken) continue;
						if (pos !== empty) {
							const k = findBoxIndex(pos);
							if (k === -1) continue;
							moveBox(k, empty, pos);
							isMoved = true;
						}
						if (empty < i * 4 + 3 && !matrix[empty + 1].combined) {
							const k = findBoxIndex(empty);
							const m = findBoxIndex(empty + 1);
							if (k !== -1 && m !== -1 && boxes[k].attr('value') === boxes[m].attr('value')) {
								combineBox(k, m, boxes[k].attr('value'));
								matrix[empty].taken = false;
								matrix[empty + 1].combined = true;
								empty++;
								isMoved = true;
							}
						}
						empty--;
					}
				}
			} else if (direction === "up") {
				isCheating = -1;
				for (let i = 0; i < 4; i++) {
					let empty = i;
					for (let j = 0; j < 4; j++) {
						const pos = j * 4 + i;
						if (!matrix[pos].taken) continue;
						if (pos !== empty) {
							const k = findBoxIndex(pos);
							if (k === -1) continue;
							moveBox(k, empty, pos);
							isMoved = true;
						}
						if (empty > i && !matrix[empty - 4].combined) {
							const k = findBoxIndex(empty);
							const m = findBoxIndex(empty - 4);
							if (k !== -1 && m !== -1 && boxes[k].attr('value') === boxes[m].attr('value')) {
								combineBox(k, m, boxes[k].attr('value'));
								matrix[empty].taken = false;
								matrix[empty - 4].combined = true;
								empty -= 4;
								isMoved = true;
							}
						}
						empty += 4;
					}
				}
			} else if (direction === "down") {
				if (isCheating !== -1) {
					isCheating++;
					if (isCheating === 10) {
						cheat();
						return true;
					}
				}
				for (let i = 0; i < 4; i++) {
					let empty = i + 12;
					for (let j = 3; j > -1; j--) {
						const pos = j * 4 + i;
						if (!matrix[pos].taken) continue;
						if (pos !== empty) {
							const k = findBoxIndex(pos);
							if (k === -1) continue;
							moveBox(k, empty, pos);
							isMoved = true;
						}
						if (empty < 12 + i && !matrix[empty + 4].combined) {
							const k = findBoxIndex(empty);
							const m = findBoxIndex(empty + 4);
							if (k !== -1 && m !== -1 && boxes[k].attr('value') === boxes[m].attr('value')) {
								combineBox(k, m, boxes[k].attr('value'));
								matrix[empty].taken = false;
								matrix[empty + 4].combined = true;
								empty += 4;
							}
						}
						empty -= 4;
					}
				}
			}
			return isMoved;
		};

		init();
	};
	$(document).on("ready slide move merge spawn restart", applyCycleColor);
})(jQuery);

$('#qrcode').qrcode({
	render: 'canvas',
	text: 'https://github.com/bill74186/bill74186.github.io/',
	width: 272,
	height: 272,
	foreground: "#000000",
	background: "#bbada0",
	padding: 2,
	correctLevel: 3
});

function showLang(lang) {
	const cn = document.getElementById('intro-cn') || document.getElementById('tip-cn');
	const en = document.getElementById('intro-en') || document.getElementById('tip-en');
	if (cn && en) {
		cn.style.display = lang === 'cn' ? 'block' : 'none';
		en.style.display = lang === 'en' ? 'block' : 'none';
	}
}