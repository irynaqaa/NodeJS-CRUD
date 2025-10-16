// Reporting module

/**
 * Generates a report with the correct pass/fail status.
 * @param {Array} results - The results of the tests.
 * @returns {Object} - The generated report.
 */
function generateReport(results) {
    const report = {
        total: results.length,
        passed: results.filter(result => result.status === 'passed').length,
        failed: results.filter(result => result.status === 'failed').length,
    };
    return report;
}

module.exports = { generateReport };