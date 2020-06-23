# GitHub Job Board
깃허브에서 제공하는 여러 기업의 구인 정보를 확인할 수 있는 서비스입니다.  <br>
GitHub Job Board를 크롤링하여 Redis 데이터베이스에 주기적으로 저장합니다. 해당 데이터베이스에서 정보를 가져와 가공하여 화면에 출력합니다. 

## Tech Stack
* Node.js
* React.js
* Redis

## Feature
* 주기적으로 크롤링하여 Redis 데이터데이스에 정보 저장
* 구인 정보를 가공하여 화면에 출력
* 목록 중 하나를 클릭하면 상세 정보가 담긴 모달 페이지 출력
* 페이지로 구분하여 버튼을 클릭해 페이지 이동 가능

## Screenshot
![캡처](https://user-images.githubusercontent.com/10339017/85362797-553d8280-b55a-11ea-907e-dce6de4e8d66.PNG)
![캡처2](https://user-images.githubusercontent.com/10339017/85362729-2a532e80-b55a-11ea-8cae-9e4c74cc6615.PNG)
![캡처3](https://user-images.githubusercontent.com/10339017/85362730-2a532e80-b55a-11ea-9df5-a75e49fdc4b3.PNG)

## Install
```
// First, install server node modules and run server
npm install
node index.js

// Second, install client node moduels and run client
cd client
npm install
npm start

// Third, run Crawling Worker
cd worker
node index.js
```
