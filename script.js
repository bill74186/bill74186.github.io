document.addEventListener('DOMContentLoaded', function(){
	const ua = navigator.userAgent;
	const androidVer = parseFloat((ua.match(/Android\s([0-9.]+)/) || [])[1]) || 0;
	const isWindows = /Windows NT/.test(ua);
	const isOldDevice = androidVer <= 6 || (isWindows && /Windows NT 6\.[0-1]/.test(ua)) || /MSIE/.test(ua);

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

	document.getElementById('btnContinue').addEventListener('click', () => {
		unlockScroll();
		document.body.removeChild(mask);
	});
});