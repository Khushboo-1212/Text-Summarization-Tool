function summarizeText() {
    let text = document.getElementById("inputText").value;

    // Split into sentences
    let sentences = text.split(".");

    // Remove empty sentences
    sentences = sentences.filter(s => s.trim().length > 0);

    // Sort by sentence length (simple logic)
    sentences.sort((a, b) => b.length - a.length);

    // Take top 2 sentences as summary
    let summary = sentences.slice(0, 2).join(". ") + ".";

    document.getElementById("output").innerText = summary;
}