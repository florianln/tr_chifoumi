const { randomChoice, turn, checkIfWinner } = require('../chifoumi.js');

describe('randomChoice', () => {
    it('is defined', () => {
        expect(randomChoice).toBeDefined();
    });
    it('return a string', () => {
        expect(typeof randomChoice()).toBe('string');
    });
    it('return pierre, feuille or ciseaux', () => {
        expect(randomChoice()).toMatch(/pierre|ciseaux|feuille/);
    });
    it('not return sth else than pierre, feuille or ciseaux', () => {
        expect(randomChoice()).not.toMatch(/papier|puit|lézard|spock/);
    });
});

describe('turn', () => {
    it('is defined', () => {
        expect(turn).toBeDefined();
    });
    it('console.log has been called', () => {
        const spy = jest.spyOn(global.console, 'log');
        turn("pierre", "feuille");
        expect(spy).toHaveBeenCalled();
    });
    it('égalité', () => {
        const spy = jest.spyOn(global.console, 'log');
        turn("pierre", "pierre");
        expect(spy).toHaveBeenCalledWith("Egalité");
    });
    it('joueur 1 gagne', () => {
        const spy = jest.spyOn(global.console, 'log');
        turn("pierre", "ciseaux");
        expect(spy).toHaveBeenCalledWith("Joueur 1 gagne cette manche");
    });
    it('joueur 2 gagne', () => {
        const spy = jest.spyOn(global.console, 'log');
        turn("pierre", "feuille");
        expect(spy).toHaveBeenCalledWith("Joueur 2 gagne cette manche");
    });
});

describe('checkIfWinner', () => {
    it('is defined', () => {
        expect(checkIfWinner).toBeDefined();
    });
    it('return J1 win', () => {
        const spy = jest.spyOn(global.console, 'log');
        checkIfWinner(2, 1);
        expect(spy).toHaveBeenCalledWith("VAINQUEUR : joueur 1");
    });
    it('return J2 win', () => {
        const spy = jest.spyOn(global.console, 'log');
        checkIfWinner(1, 2);
        expect(spy).toHaveBeenCalledWith("VAINQUEUR : joueur 2");
    });
});