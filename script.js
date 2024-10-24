const InputSelection = ["stone-img", "scissor-img", "paper-img"];

const elements = document.querySelectorAll("#center .item");

//selecting RULES button
const rule_btn = document.querySelector(".rule-btn, .rules-btn");

//selecting NEXT button
const next_btn = document.querySelector(".next-btn");

//selecting RULES-DIV
const rules_div = document.querySelector("#rules");

//selecting close icon to close Rulse-Div
const close_rules = document.querySelector(".close-rule");

//selecting computer score div to display computer score
const c_score = document.getElementById("c-score");

//selecting computer score div to display player score
const p_score = document.getElementById("p-score");

//selecting  tie div
const tie_div = document.querySelector("#tie-div");

//selecting player win div
const player_win_div = document.querySelector("#player-win-div");

//selecting pc win div
const pc_win_div = document.querySelector("#pc-win-div");

let computerScore = localStorage.getItem("computerScore") || 0;
let playerScore = localStorage.getItem("playerScore") || 0;

c_score.textContent = computerScore;
p_score.textContent = playerScore;

// Function to select the random by Computer
function computerInput() {
  return InputSelection[Math.floor(Math.random() * InputSelection.length)];
}

var pc_img;
// Function to select by Player
function playerInput() {
  elements.forEach(function (elem) {
    elem.addEventListener("click", function (dets) {
      var playerSelect = dets.target.id;
      var computerSelect = computerInput();
      var bgColor;

      if (playerSelect === computerSelect) {
        tie_div.style.display = "inline-block";
        next_btn.style.display = "none";

        let res_div_circ = document.querySelectorAll("#res-img");

        res_div_circ.forEach(function (e) {
          e.innerHTML = `<div class="outer-circle">
                 <div class="inner-circle">
                    <div id="img">
                      <img id="stone-img" src="${dets.target.src}" alt="" />
                    </div>
                  </div>`;
        });

        if (playerSelect === "stone-img") {
          bgColor = "#0074B6";
        } else if (playerSelect === "scissor-img") {
          bgColor = "#BD00FF";
        } else {
          bgColor = "#FFA943";
        }

        document.querySelectorAll(".outer-circle").forEach(function (e) {
          e.style.backgroundColor = bgColor;
        });
      } else if (
        (playerSelect === "stone-img" && computerSelect === "scissor-img") ||
        (playerSelect === "scissor-img" && computerSelect === "paper-img") ||
        (playerSelect === "paper-img" && computerSelect === "stone-img")
      ) {
        playerScore++;
        p_score.textContent = playerScore;
        localStorage.setItem("playerScore", playerScore);
        next_btn.style.display = "inline";
        player_win_div.style.display = "inline-block";

        let res_div_circ = document.querySelector("#user-res-img");

        res_div_circ.innerHTML = `<div id="cir1">
                                   <div id="cir2">
                                     <div id="cir3"> 
                                          <div class="outer-circle">
                                              <div class="inner-circle">
                                                 <div id="img">
                                                   <img id="stone-img" src="${dets.target.src}" alt="" />
                                                 </div>
                                               </div>
                                          </div>
                                     </div>
                                    </div>
                                   </div>

                  `
        if (playerSelect === "stone-img") {
          bgColor = "#0074B6";
        } else if (playerSelect === "scissor-img") {
          bgColor = "#BD00FF";
        } else {
          bgColor = "#FFA943";
        }

        var out = document.querySelector(".outer-circle");
        out.style.backgroundColor = bgColor;

        if (computerSelect === "stone-img") {
          bgColor = "#0074B6";
          pc_img = "./images/stone.png";
        } else if (computerSelect === "scissor-img") {
          bgColor = "#BD00FF";
          pc_img = "./images/scissor.png";
        } else {
          bgColor = "#FFA943";
          pc_img = "./images/paper.png";
        }

        let res_div_circ_pc = document.querySelector("#pc-res-img");

        res_div_circ_pc.innerHTML = `<div class="ouuter-circle">
                 <div class="inner-circle">
                    <div id="img">
                      <img id="stone-img" src="${pc_img}" alt="" />
                    </div>
                  </div>`;
        document.querySelector(".ouuter-circle").style.backgroundColor =
          bgColor;
      } else {
        computerScore++;
        c_score.textContent = computerScore;
        localStorage.setItem("computerScore", computerScore);
        next_btn.style.display = "none";
        pc_win_div.style.display = "inline-block";

        let res_div_circ = document.querySelector("#uuser-res-img");

        res_div_circ.innerHTML = `<div class="outer-circle">
                                     <div class="inner-circle">
                                           <div id="img">
                                             <img id="stone-img" src="${dets.target.src}" alt="" />
                                           </div>
                                     </div>
                                  </div>`;

        if (playerSelect === "stone-img") {
          bgColor = "#0074B6";
        } else if (playerSelect === "scissor-img") {
          bgColor = "#BD00FF";
        } else {
          bgColor = "#FFA943";
        }

        document.querySelector(".outer-circle").style.backgroundColor = bgColor;

        if (computerSelect === "stone-img") {
          bgColor = "#0074B6";
          pc_img = "./images/stone.png";
        } else if (computerSelect === "scissor-img") {
          bgColor = "#BD00FF";
          pc_img = "./images/scissor.png";
        } else {
          bgColor = "#FFA943";
          pc_img = "./images/paper.png";
        }

        let res_div_circ_pc = document.querySelector("#pcc-res-img");

        res_div_circ_pc.innerHTML = `
                    <div id="cir1">
                       <div id="cir2">
                          <div id="cir3">                      
                              <div class="ouuter-circle">
                                   <div class="inner-circle">
                                      <div id="img">
                                        <img id="stone-img" src="${pc_img}" alt="" />
                                      </div>
                              </div>
                              </div>
                          </div>
                       </div>
                    </div>
                  `;
        document.querySelector(".ouuter-circle").style.backgroundColor =
          bgColor;
      }
    });
  });
}

playerInput();

// Showing Rules Box when a Player wants to know Rules
(function showRules() {
  rule_btn.addEventListener("click", function () {
    rules_div.style.display = "inline-block";
    rule_btn.style.backgroundColor = "red";
  });

  function closeRules() {
    close_rules.addEventListener("click", function () {
      rule_btn.style.backgroundColor = "transparent";
      rules_div.style.display = "none";
    });
  }

  closeRules();
})();
