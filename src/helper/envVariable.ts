import dotenv from 'dotenv';
dotenv.config();

function checkEnvVariable(){
    // Check if the PORT is defined
    if (!process.env.PORT) {
        console.error('PORT is not defined');
        process.exit(1);
    }

    // Check if JWT_SECRET is defined
    if (!process.env.JWT_SECRET) {
        console.error('JWT_SECRET is not defined');
        process.exit(1);
    }

    // Check if ISSUER is defined
    if (!process.env.ISSUER) {
        console.error('ISSUER is not defined');
        process.exit(1);
    }

    // Check if AUDIENCE is defined
    if (!process.env.AUDIENCE) {
        console.error('AUDIENCE is not defined');
        process.exit(1);
    }
}

export default checkEnvVariable;