let grecaptchaLoaded = false;

// reCAPTCHAが正常にロードされたことを示すフラグ
function grecaptchaReady() {
    grecaptchaLoaded = true;
}

// DOMが完全に読み込まれたらフォーム送信の処理を行う
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const confirmationPopup = document.getElementById("confirm-back");
    const confirmationClose = document.getElementById("confirmationClose");

    // フォーム送信イベントをハンドリング
    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // フォームのデフォルト動作を防止

        // reCAPTCHAが読み込まれていない場合はエラーメッセージを表示
        if (!grecaptchaLoaded) {
            alert("reCAPTCHA is still loading. Please try again later.");
            return;
        }

        // reCAPTCHAトークンを取得
        const captchaToken = grecaptcha.getResponse(); // v2ではこれを使用

        // トークンが空でないことを確認
        if (!captchaToken) {
            alert("Please complete the CAPTCHA.");
            return;
        }

        try {
            // フォームデータを準備
            const formData = new FormData(form);
            formData.append("g-recaptcha-response", captchaToken); // reCAPTCHAトークンを追加

            // Formspreeに送信
            const response = await fetch("https://formspree.io/f/mvggvdgo", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                confirmationPopup.style.display = "flex"; // サクセスメッセージを表示
                form.reset(); // フォームをリセット
            } else {
                // エラーの詳細を取得して表示
                const errorData = await response.json();
                console.error("Error Details:", errorData);
                alert("Failed to send the message. Please check your inputs or try again later.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An unexpected error occurred. Please try again later.");
        }
    });

    // ポップアップを閉じるイベント
    confirmationClose.addEventListener("click", () => {
        confirmationPopup.style.display = "none"; // ポップアップを非表示
    });
});
