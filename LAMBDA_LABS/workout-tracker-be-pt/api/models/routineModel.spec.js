const {getRoutines} = require('./routineModel');

describe('Workout Function test', () => {
    it('should get public data', () => {
        const data = getRoutines(11);
        expect(data).not.toBe(null);
    });
});