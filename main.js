const conceptMap = {
    grief: "grief.html",
    sadness: "grief.html",
    nostalgia: "nostalgia.html",
    memory: "nostalgia.html",
    love: "desire.html",
    freedom: "freedom.html",
    loneliness: "isolation.html",
    god: "spirituality.html",
    beauty: "aesthetic.html",
    control: "power.html",
    chaos: "entropy.html",
    dog: "companionship.html",
    coffee: "ritual.html",
    mirror: "self.html",
    anger: "rage.html"
  };

  function matchConcept(input) {
    const cleaned = input.toLowerCase().trim();
  
    // Direct match first
    if (conceptMap[cleaned]) return conceptMap[cleaned];
  
    // Fuzzy fallback: search for partial match
    for (let key in conceptMap) {
      if (cleaned.includes(key)) return conceptMap[key];
    }
  
    // Default page
    return "default.html";
  }
  
  function goToResultPage() {
    const input = document.getElementById("userInput").value;
    const matchedPage = matchConcept(input);
    window.location.href = matchedPage;
  }

  