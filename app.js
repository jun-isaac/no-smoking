        // 금연시작일
        let startDay = new Date('2022-01-01').getTime();
        // 오늘
        let today = new Date().getTime();

        // 경과일 = 오늘 - 금연시작한날
        // result = today - startDay
        console.log(startDay, today);
        result = today - startDay;
        result = result / (1000 * 60 * 60 * 24); // 일수

        //Math 객체에서 소수점 제하기
        intResult = Math.floor(result);

        // 시간 표시
        document.getElementById('day').innerHTML = intResult;
        // $('#day').html(result);

        /**** 기능개선 
         * 1. 사용자가 날짜입력(금연시작일) 가능: 생각해보세요
         * 2. 금연시작일이 영구적으로 저장(DB)
         * 3. 디자인을 각색해보세요 
         * 4. 깃허브에 업데이트(html, css, js 코드 분리)
         */
