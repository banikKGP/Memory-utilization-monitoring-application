var ramCalculation = () => {
    const memoryUsage = process.memoryUsage();
    var totalMemory = memoryUsage.heapTotal;
    var memoryUsed = memoryUsage.heapUsed;
    var availableMemory = totalMemory - memoryUsed;
    return (memoryUsed/totalMemory)*100
}

module.exports = {
    ramCalculation
}