const test = require('./diet');

describe('Test the test function', () => {
    it('should return false if given false data', () => {
        let data = {
            meal_date: "2020-05-03",
            meal_time: "2:00 pm"
        }
        try{
            test(data);
        } catch {
            expect(true).toBe(true);
        }
        expect(false).toBe(true);
    });
});