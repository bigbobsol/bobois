export function ImageGenerationScript(e) {
      e.preventDefault();
        const nftID = document.querySelector("#input-nftId");
        const changeImage = document.querySelector("#output");
        const chosenStyle = document.querySelector("#chooseStyle");
        const textOutput = document.querySelector("#text-output");
        const updateButton = document.querySelector("#submit_button");
        const link = document.querySelector("#link")
      
          console.log(nftID.value.length)
          console.log(chosenStyle.value)
          const postData = {
            "nft_id": nftID.value,
            "style": chosenStyle.value
          };
          if (nftID.value.length === 0 || nftID.value > 4999) {
            textOutput.classList.remove("hide")
            console.log("Submission was empty. Please input your datcat ID")
            document.querySelector("#text-output").textContent = "PLEASE INPUT A VALID DATCAT ID"
          };
          if (chosenStyle.value === "") {
            textOutput.classList.remove("hide")
            console.log("Submission was empty. Please input your datcat ID")
            document.querySelector("#text-output").textContent = "PLEASE FILL ALL THE BOXES"
          };

          if (nftID.value.length > 0 && nftID.value <= 4999 && chosenStyle.value.length > 1) {
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
            chosenStyle.classList.add("hide");

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
            link.download = "datcat_cheers_sticker.png";
            })
            .catch(console.error);

            })
            .catch(error => console.error('Error:', error));
            };
};