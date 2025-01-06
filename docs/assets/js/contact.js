document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const confirmationPopup = document.getElementById("confirm-back");
    const confirmationClose = document.getElementById("confirmationClose");

    // ハンドリング送信イベント
    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // ページのリロードを防ぐ

        // フォームデータを取得
        const formData = new FormData(form);
        const data = {
            firstname: formData.get("firstname"),
            lastname: formData.get("lastname"),
            emailaddress: formData.get("emailaddress"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        // Formspree APIに送信
        try {
            const response = await fetch("https://formspree.io/f/xnnnopar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // 成功時にポップアップを表示
                confirmationPopup.style.display = "flex";
            } else {
                alert("Sending message failed. Please try again.");
            }
        } catch (error) {
            console.error("エラー:", error);
            alert("Sending message failed. Please try again.");
        }
    });

    // ポップアップを閉じる
    confirmationClose.addEventListener("click", () => {
        confirmationPopup.style.display = "none";
        form.reset(); // フォームをリセット
    });
});