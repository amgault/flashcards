function ClozeCard(text, cloze) {
    this.cloze = cloze;
    this.partial = this.checkCloze;
    this.fullText = text;
    this.checkCloze = function() {
        if(this.fullText.indexOf(cloze) === -1) {
            return 'Sorry, the text does not include the cloze.';
        } else {
            return text.replace(cloze, '...');
        }
    };
}

module.exports = ClozeCard;