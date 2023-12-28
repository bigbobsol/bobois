export function ImageGenerationScript() {
        const nftID = document.querySelector("#input-nftId");
        const changeImage = document.querySelector("#output");
        const textOutput = document.querySelector("#text-output");
        const updateButton = document.querySelector("#submit_button");
        const link = document.querySelector("#link")
      
          console.log(nftID.value.length)
          const postData = {
            "nft_id": nftID.value
          };
          if (nftID.value.length === 0 || nftID.value > 4500) {
            textOutput.classList.remove("hide")
            console.log("Submission was empty. Please input your quekz ID")
            document.querySelector("#text-output").textContent = "PLEASE INPUT A VALID QUEKZ ID"
          };

          if (nftID.value.length > 0 && nftID.value <= 4500) {
            textOutput.classList.remove("hide")
            document.querySelector("#text-output").textContent = "LOADING..."

            fetch('https://sleepy-frog-wetsuit.cyclic.app/api/projects', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
            })
            .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
            })
            .then(data => {
            console.log(data);
            changeImage.src = data
            textOutput.classList.add("hide");
            nftID.classList.add("hide");

            fetch(data)
            .then(response => response.blob())
            .then(blob => {
              updateButton.textContent = "DOWNLOAD"
              updateButton.removeAttribute("type")
              updateButton.addEventListener("click", event => {
                event.preventDefault();
                console.log("Clicked DOWNLOAD");
                link.click();
              });
              updateButton.id = "testButton"
            link.href = URL.createObjectURL(blob);
            link.download = "christmas_quekz.png";
            })
            .catch(console.error);

            })
            .catch(error => console.error('Error:', error));
            };
};