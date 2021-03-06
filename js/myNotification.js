(function () {
	var Mytip = {
			icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABUFBMVEX///8v6S8z6jM67Dom5iY+7T4X4RdW9VZQ81AS4BIj5CMe4x4h5SFE8UQr5ysp6Ck36zdI8kgc4hxB70Ea4hpG8EZM80xK8UoP3g8L3AsI3AhT9VMM3gxZ91kD2gNe+V5c91wG2wb1/vX+//7n/Of6//qw+LDt/u3O/M73//f8//w35DcB3QHv/u/q/epo62gw6zDx/vHh/OHd+92697qy+LKc8pyU+pSP+I+L74t4+nhf6l9a81pO604h4CEc5hwJ4Ank/eTb/Num9qai8qKg+KCX8ZeT8JOL9It++H5683px7nFt9W1Y7lhU81RJ60lD6EM/8j868Dos7Swm4CYk6SQV5BXE/MS+/b6+9r64/Li2+Law+rCr9auS8ZKG8oZ473hu+G5s7mxo8mhk+WRT5lNJ9ElI6kg25DbC9sKU9pSL94tz9XNW6FY57zkr4ivYTqDSAAACLUlEQVRIx73QV1saQRiG4U80qCgqiIQQgsnuwi69iCC9Q+hV7L2m//+zzEAis/uxHHjgffjsvtc1M/D2HOJxLHG/S9wnYseiA+bifUe1XZnakY8HVeLpzWfk5lQEFVLi00wJafbhz5dVnTsAccWW54i50P8HH1kr+l7vkQ0HLuX/K6xHw49yuWlgk2LhXGEZfkoc8JLZzEYnMKS2maWvOUgUUjtsbEvM+zffyxgMeVLDKb2sNsXpgQwKfYkO2tvy+nIoMbWj0N8nudDTy2tKhDE+olfqf3cASANljvBAue+2lX5/JYOzgTLfuYES3iFbZMCXB6gLkyvjgYYMXFdB1CfXri8iwaIbQvUg6nWgWniweQbgb+FBC6jFLWRznwzSQdQXgdJgh2QgPC1oENWBE2DvUKMyWMDW6SC7gL1ysIFkyR0KI9wng84mki25YU+3hHoHqNslZL1Bn3UN9Vuginigey4ANEaoF4HK6zBT5/q6u4ZyHih3eh0b5XImnTKm3UDxF2uY0WTE8YKHMb/HqKTdeHrWKqPHD/9ETXJaU8XHhaqrWnmOwn9CVyuTC3Ck+pI5We0K8OIko2V5o+Ma97IxcwKMy1WW92ock142XgKLC7DfbMNvAL6oxcI0ckr5ImlheP804r9sVqYkOVAIBWxTFq/dbrdapiEQAoSLf1AV52CWiMc6kycCKoRq5guSqQqgihdKHruMpyTwMBcXrjwMrXbCOnyohDl4c38BB/6EdzuQgMcAAAAASUVORK5CYII=",
			title: "Notification",
			duration: 3000,
			msg: "I'm a default message",
			onclick: null,
			onclose: null
		},
		N;
	if (!("Notification" in window)) {
		Mytip.showTip = function () {
			if (console) console.log("your browser is not support HTML5 notification");
		};
	} else {
		N = window.Notification || window.mozNotification || window.webkitNotification;
		Mytip.showTip = function (t, m) {
			if (N.permission === "granted") granted(t, m);
			else if (N.permission !== 'denied') {
				N.requestPermission(function (permission) {
					if (permission === "granted") granted(t, m);
				});
			}
		}

		function granted(t, m) {
			var n = new N(
				t, {
					body: m,
					icon: Mytip.icon,
				}
			);
			n.onclick = Mytip.onclick;
			n.onclose = Mytip.onclose;
			n.onerror = function () {
				console.log("Notification is error");
			};
			n.onshow = function () {
				if (Mytip.duration)
					setTimeout(function () {
						n.close();
					}, Mytip.duration);
			};
		}
	}
	window.Mytip = Mytip;
})();
