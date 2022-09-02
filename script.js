            let countEl = document.querySelector(".count")
                let text = document.querySelector(".text")
                 let counter = 0

                  console.log(text)

                 function increment() {
                    counter += 1;
                    countEl.innerHTML = counter
                    // document.querySelector(".count").innerHTML = counter
                 }
                  function save(){
                        let countSring = counter + " - "
                        text.innerHTML += countSring;
                        countEl.innerHTML =0;
                        counter= 0
                        // console.log(counter)      
                  }