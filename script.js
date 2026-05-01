document.addEventListener('DOMContentLoaded', function(){
	const ua = navigator.userAgent;
	let isOldDevice = false;

	const androidMatch = ua.match(/Android\s([0-9.]+)/);
	if(androidMatch){
		const androidVer = parseFloat(androidMatch[1]);
		isOldDevice = androidVer <= 6;
	}
	if(/Windows NT 6\.1/.test(ua)) isOldDevice = true;
	if(/MSIE|Trident/.test(ua)) isOldDevice = true;

	if(!isOldDevice) return;
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

	document.getElementById('btnContinue').onclick = function(){
		mask.remove();
		unlockScroll();
	};
});

const loadDom = document.getElementById('load');
// 强制浏览器渲染显示
loadDom.classList.add('show');

// 停留时间 + 淡出
setTimeout(() => {
	loadDom.classList.remove('show');
	setTimeout(() => loadDom.remove(), 600);
}, 300);

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
		let userCfg = JSON.parse(localStorage.getItem("eggConfig")) || defaultCfg;
		return userCfg;
	}

	let cfg = getEggConfig();
	var defaults = {
		delay: cfg.animSpeed
	};

	function formatNum(num) {
		const raw = Number(num);

		if (!cfg.autoFormat) {
			if (!isFinite(raw) || isNaN(raw)) return "∞";
			return raw.toLocaleString();
		}

		const unit = ["", "", "M", "G", "T", "P", "E", "Z", "Y", "R", "Q", "X", "W", "V", "U", "S", "A", "B", "C", "D"];

		if (isNaN(raw) || !isFinite(raw)) {
			return "∞";
		}

		let idx = 0;
		let val = raw;

		while (val >= 1000000 && idx < unit.length - 1) {
			val /= 1000;
			idx++;
		}

		if (idx === 0) {
			return raw.toLocaleString();
		}

		return Number.isInteger(val) ? val + unit[idx] : val.toFixed(1) + unit[idx];
	}
	$.fn.init2048 = function(_options) {
		var _this = this;
		var options = $.extend(defaults, _options);
		var dir = {
			up: 'up',
			right: 'right',
			down: 'down',
			left: 'left'
		};
		var board = {};
		var matrix = [];
		var boxes = [];
		var score = 0;
		var bestScoreKey = options.bestScoreKey || '2048-best';

		let rawBest = localStorage.getItem(bestScoreKey);
		let bestScore = Number(rawBest);
		if (isNaN(bestScore) || !isFinite(bestScore)) bestScore = 0;

		var isCheating = 0;
		var isGameOver = false;
		var isWin = false;

		const CELL_SIZE = 76;
		const BORDER_OFFSET = 3;

		$('#best-score').text(formatNum(bestScore));
		resetGame();
		bind();

		function resetGame() {
			cfg = getEggConfig();
			boxes = [];
			matrix = [];
			isCheating = 0;
			isGameOver = false;
			isWin = false;
			score = 0;
			$('#score').text(formatNum(score));
			_this.empty();
			board = $('<div>').addClass('board').appendTo(_this);
			for (var i = 0; i < 4; i++) {
				for (var j = 0; j < 4; j++) {
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
		}

		function cheat() {
			_this.empty();
			resetGame();
			createBox(String(cfg.eggCube));
		}

		function createBox(value) {
			let emptyMatrix = matrix.filter(item => !item.taken).length;
			if (emptyMatrix === 0) return;

			let random = Math.floor(Math.random() * emptyMatrix + 1);
			let chosenIndex = 0,
				j = 0;
			for (; chosenIndex < matrix.length; chosenIndex++) {
				if (!matrix[chosenIndex].taken && ++j === random) {
					matrix[chosenIndex].taken = true;
					break;
				}
			}

			if (!value) {
				let numArr = cfg.randList.split(',').map(String);
				value = numArr[Math.floor(Math.random() * numArr.length)];
			}
			value = String(value);

			let showText = formatNum(value);
			var newBox = $('<div>')
				.addClass('box')
				.attr({
					position: chosenIndex,
					value: value
				})
				.css({
					marginTop: matrix[chosenIndex].top + BORDER_OFFSET,
					marginLeft: matrix[chosenIndex].left + BORDER_OFFSET,
					opacity: 0
				})
				.text(showText)
				.appendTo(board)
				.animate({
					opacity: 1
				}, options.delay * 2);

			boxes.push(newBox);
		}

		function combineBox(sourceIndex, targetIndex, valueStr) {
			let numVal = Number(valueStr);
			let _value = numVal * 2;
			score += _value;

			$('#score').text(formatNum(score));

			if (score > bestScore) {
				bestScore = score;
				localStorage.setItem(bestScoreKey, bestScore);
				$('#best-score').text(formatNum(bestScore));
			}

			let targetBox = boxes[targetIndex];
			let newValStr = String(_value);
			let showText = formatNum(newValStr);

			targetBox.attr('value', newValStr).text(showText).css({
					zIndex: 99
				})
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
						$(this).css({
							zIndex: 1
						});
					});
				});

			boxes[sourceIndex].remove();
			boxes.splice(sourceIndex, 1);

			if (_value === cfg.winGoal && !isWin) {
				isWin = true;
				showWin();
			}
		}

		function gameOver() {
			if (boxes.length != 16) return false;
			let i, a, b;
			for (i = 0; i < 16; i++) {
				for (a = 0; a < boxes.length; a++)
					if (boxes[a].attr('position') == i) break;
				if (i % 4 !== 3) {
					for (b = 0; b < boxes.length; b++)
						if (boxes[b].attr('position') == i + 1) break;
					if (boxes[a].attr('value') === boxes[b].attr('value')) return false;
				}
				if (i < 12) {
					for (b = 0; b < boxes.length; b++)
						if (boxes[b].attr('position') == i + 4) break;
					if (boxes[a].attr('value') === boxes[b].attr('value')) return false;
				}
			}
			return true;
		}

		function showGameOver() {
			isGameOver = true;
			let overlay = $('<div>').addClass('overlay')
				.append($('<h2>').text(options.textGameOver || '游戏结束'))
				.append($('<button>').text(options.textNewGame || '重新开始').click(resetGame));
			board.append(overlay);
		}

		function showWin() {
			let overlay = $('<div>').addClass('overlay')
				.append($('<h2>').text(options.textWin || '恭喜通关！'))
				.append($('<button>').text(options.textKeepPlaying || '继续挑战').click(() => overlay.remove()));
			board.append(overlay);
		}

		function gameRun(dir) {
			if (isGameOver) return;
			if (run(dir)) createBox();
			if (gameOver()) showGameOver();
		}

		function bind() {
			$(window).keydown(function(e) {
				if (isGameOver) return;
				if (e.which === 37) {
					e.preventDefault();
					gameRun(dir.left);
				}
				if (e.which === 38) {
					e.preventDefault();
					gameRun(dir.up);
				}
				if (e.which === 39) {
					e.preventDefault();
					gameRun(dir.right);
				}
				if (e.which === 40) {
					e.preventDefault();
					gameRun(dir.down);
				}
			});
			$('#restart').click(resetGame);
			$('#toggle-intro').click(function() {
				$('#intro').toggleClass('active');
				$(this).text($('#intro').hasClass('active') ? (options.textHide || '收起介绍') : (options.textHowToPlay || '游戏介绍'));
			});

			let sx, sy;
			let dx, dy;
			document.addEventListener("touchstart", e => {
				if (e.touches.length > 1) return;
				sx = e.touches[0].clientX;
				sy = e.touches[0].clientY;
			});
			document.addEventListener("touchmove", e => e.preventDefault());
			document.addEventListener("touchend", e => {
				if (e.touches.length > 0) return;
				dx = e.changedTouches[0].clientX - sx;
				dy = e.changedTouches[0].clientY - sy;
				if (Math.max(Math.abs(dx), Math.abs(dy)) > 10) {
					gameRun(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? dir.right : dir.left) : (dy > 0 ? dir.down : dir.up));
				}
			});
		}

		function run(dir) {
			let isMoved = false;
			for (let i = 0; i < 16; i++) matrix[i].combined = false;

			if (dir == "left") {
				isCheating = -1;
				for (let i = 0; i < 4; i++) {
					let empty = i * 4;
					for (let j = 0; j < 4; j++) {
						let pos = i * 4 + j;
						if (!matrix[pos].taken) continue;
						if (pos != empty) {
							let k = boxes.findIndex(box => box.attr("position") == pos);
							boxes[k].animate({
								marginLeft: matrix[empty].left + BORDER_OFFSET,
								marginTop: matrix[empty].top + BORDER_OFFSET
							}, options.delay);
							boxes[k].attr('position', empty);
							matrix[empty].taken = true;
							matrix[pos].taken = false;
							isMoved = true;
						}
						if (empty > i * 4 && !matrix[empty - 1].combined) {
							let k = boxes.findIndex(box => box.attr("position") == empty);
							let m = boxes.findIndex(box => box.attr("position") == empty - 1);
							if (boxes[k].attr('value') === boxes[m].attr('value')) {
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
			} else if (dir == "right") {
				isCheating = -1;
				for (let i = 3; i > -1; i--) {
					let empty = i * 4 + 3;
					for (let j = 3; j > -1; j--) {
						let pos = i * 4 + j;
						if (!matrix[pos].taken) continue;
						if (pos != empty) {
							let k = boxes.findIndex(box => box.attr("position") == pos);
							boxes[k].animate({
								marginLeft: matrix[empty].left + BORDER_OFFSET,
								marginTop: matrix[empty].top + BORDER_OFFSET
							}, options.delay);
							boxes[k].attr('position', empty);
							matrix[empty].taken = true;
							matrix[pos].taken = false;
							isMoved = true;
						}
						if (empty < i * 4 + 3 && !matrix[empty + 1].combined) {
							let k = boxes.findIndex(box => box.attr("position") == empty);
							let m = boxes.findIndex(box => box.attr("position") == empty + 1);
							if (boxes[k].attr('value') === boxes[m].attr('value')) {
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
			} else if (dir == "up") {
				isCheating = -1;
				for (let i = 0; i < 4; i++) {
					let empty = i;
					for (let j = 0; j < 4; j++) {
						let pos = j * 4 + i;
						if (!matrix[pos].taken) continue;
						if (pos != empty) {
							let k = boxes.findIndex(box => box.attr("position") == pos);
							boxes[k].animate({
								marginLeft: matrix[empty].left + BORDER_OFFSET,
								marginTop: matrix[empty].top + BORDER_OFFSET
							}, options.delay);
							boxes[k].attr('position', empty);
							matrix[empty].taken = true;
							matrix[pos].taken = false;
							isMoved = true;
						}
						if (empty > i && !matrix[empty - 4].combined) {
							let k = boxes.findIndex(box => box.attr("position") == empty);
							let m = boxes.findIndex(box => box.attr("position") == empty - 4);
							if (boxes[k].attr('value') === boxes[m].attr('value')) {
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
			} else if (dir == "down") {
				if (isCheating != -1) {
					isCheating++;
					if (isCheating == 10) {
						cheat();
						return true;
					}
				}
				for (let i = 0; i < 4; i++) {
					let empty = i + 12;
					for (let j = 3; j > -1; j--) {
						let pos = j * 4 + i;
						if (!matrix[pos].taken) continue;
						if (pos != empty) {
							let k = boxes.findIndex(box => box.attr("position") == pos);
							boxes[k].animate({
								marginLeft: matrix[empty].left + BORDER_OFFSET,
								marginTop: matrix[empty].top + BORDER_OFFSET
							}, options.delay);
							boxes[k].attr('position', empty);
							matrix[empty].taken = true;
							matrix[pos].taken = false;
							isMoved = true;
						}
						if (empty < 12 + i && !matrix[empty + 4].combined) {
							let k = boxes.findIndex(box => box.attr("position") == empty);
							let m = boxes.findIndex(box => box.attr("position") == empty + 4);
							if (boxes[k].attr('value') === boxes[m].attr('value')) {
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
		}
	}
})(jQuery);

function applyCycleColor() {
	const colorList = [
		"#FFF8D7", "#FFED97", "#FFBB77", "#FF9224", "#FF5809", "#EA0000",
		"#FFFF37", "#F9F900", "#FFD700", "#FFC125", "#FFA500", "#FF8C00", "#FF00FF"
	];
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
		const idx = ((exp - baseExp - 1) % colorList.length + colorList.length) % colorList.length;

		tile.style.backgroundColor = colorList[idx];
		tile.style.color = "#ffffff";
		const len = rawVal.length;
		tile.style.fontSize = `${Math.max(12, 26 - len * 1.3)}px`;
		tile.style.lineHeight = "70px";
	});
}

$(document).on("ready slide move merge spawn restart", applyCycleColor);
setInterval(applyCycleColor, 120);

$('#qrcode').qrcode({
	ender: 'canvas',
	text: 'wxp://f2f0PhE55DHAPygOvaC-OE3HBZ0Qm1YCGWqbxTafhilBEz8',
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