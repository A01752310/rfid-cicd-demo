const { execSync } = require('child_process');

console.log("Ejecutando pruebas CI para Sistema RFID...");

try {
    const stdout = execSync('node app.js').toString();
    if (stdout.includes('ONLINE')) {
        console.log("✅ CI Pass: La salida del sistema contiene el estado 'ONLINE'.");
        process.exit(0);
    } else {
        console.error("❌ CI Fail: La salida no contiene 'ONLINE'.");
        process.exit(1);
    }
} catch (error) {
    console.error("❌ Error grave al ejecutar app.js");
    process.exit(1);
}
