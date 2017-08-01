function ClozeCard(text, cloze) {
    this.cloze = cloze;
    this.fullText = text;
    this.partial = this.getPartial();
}

ClozeCard.prototype.getPartial = function() {
    return this.fullText.includes(this.cloze) 
        ? this.fullText.replace(this.cloze, '... ') 
        : 'Sorry, the text does not include the cloze.';
}

module.exports = ClozeCard;