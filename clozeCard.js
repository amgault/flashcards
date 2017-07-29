function ClozeCard(text, cloze) {
    this.cloze = cloze;
    this.partial = text.replace(cloze, '...');
    this.fullText = text;
    this.checkCloze = function() {
        if(this.fullText.indexOf(cloze) === -1) {
            console.log('Sorry, the text does not include the cloze.')
        }
    };
}

module.exports = ClozeCard;