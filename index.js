import 'dotenv/config';
import { app } from './src/app.js';

// .env 파일에 예를 들어 PORT="3000" 을 작성하면, process.env.PORT가 3000이 됨
const options = {
    host: "0.0.0.0",
    port: 8080
}

app.listen(options, () => {
    console.log(`정상적으로 서버를 시작하였습니다.  http://localhost:${options.port}`);
});