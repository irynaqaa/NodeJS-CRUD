// Unit tests for media capture functionality
const { captureMediaOnFailure } = require('../mediaCapture');

describe('Media Capture Tests', () => {
    it('should capture screenshot on test failure', async () => {
        const result = await captureMediaOnFailure();
        expect(result).toHaveProperty('screenshot');
    });

    it('should capture video on test failure', async () => {
        const result = await captureMediaOnFailure();
        expect(result).toHaveProperty('video');
    });
});