const request = require('supertest');
const express = require('express');
const app = require('../app'); // Adjust the path as necessary

describe('GET /', () => {
    it('should render the page/index view with status 200', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toContain('<!DOCTYPE html>'); // Check for expected content in the response
        expect(response.text).toContain('Index Page'); // Adjust based on actual content in index.ejs
    });

    it('should handle view rendering errors', async () => {
        // Simulate an error in rendering
        jest.spyOn(app, 'render').mockImplementation((view, options, callback) => {
            callback(new Error('View rendering error'));
        });

        const response = await request(app).get('/');
        expect(response.status).toBe(500);
        expect(response.text).toContain('Internal Server Error'); // Adjust based on actual error handling
    });
});
