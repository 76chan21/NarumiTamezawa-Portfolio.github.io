document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const confirmationPopup = document.getElementById("confirm-back");
    const confirmationClose = document.getElementById("confirmationClose");

    // フォーム送信イベントをハンドリング
    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // フォームのデフォルト動作を防止

        try {
            // reCAPTCHAトークンを取得
            const captchaToken = await grecaptcha.execute("6LcATLEqAAAAAAMuTLb64DkVB5z7bFSWyWVF8jHD", { action: "submit" });

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