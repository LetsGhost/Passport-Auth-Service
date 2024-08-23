import dotenv from 'dotenv';
dotenv.config();

function checkEnvVariable(){
    // Check if the PORT is defined
    if (!process.env.PORT) {
        console.error('PORT is not defined');
        process.exit(1);
    }
}

export default checkEnvVariable;