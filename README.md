## Scene (2023/11 ~ 2023/01/26)

**배포** <https://scene-c942c.web.app/>
***

리액트의 원활한 학습과 이해를 위해 제작한 개인 프로젝트 입니다.

### 📃프로젝트 소개
***
+ 요즘 세대의 블로그 유행과 또 저 개인적으로 다양한 장르의 미디어를 경험하고 기록하는 것을 좋아하여, 해당 프로젝트를 만들기로 결정하였습니다.

### 💻기술
***
+ 바닐라 자바스크립트를 어느정도 사용한다고 생각했으나, 리액트를 사용하는 것은 또 다른 영역이었습니다. 적절하게 hook을 사용하고, 컴포넌트를 나누며, state와 props를 관리하는 것을 보다 더 능숙히 하기 위해 **리액트를 사용**하였습니다.
+ 페이지를 구현하며, 리액트는 싱글 페이지이기 때문에 화면전환을 어떻게 해야할지 고민했습니다. 그래서 **리액트 라우터**를 사용해 페이지 간 이동을 구현했습니다.
+ 페이지 간 state 전달을 보다 효율적이게 하기 위해 **리덕스 툴킷**을 사용하였습니다.
+ 에디터를 구현하기 위해 리액트에 최적화된 **React Quill Editor**를 사용하였습니다.
+ 해당 웹앱을 배포하는데 **firebase를 사용해 배포**했습니다

### 🤔문제점
***
+ 해당 프로젝트 또한 **효율적인 코드로 동작하고 있는지 끊임없이 고민**했습니다. 아무래도 중복이 되는 컴포넌트가 있고, 더 줄일 수는 없을까 고민하였으나 뚜렷한 해결책을 찾지 못했습니다.
+ 처음에는 리덕스를 사용하지 않고 오로지 리액트 라우터를 사용하여 페이지간 state를 전달하였으나, 그러면 쓸데없이 state를 전달하는 컴포넌트가 발생하였고, 불필요한 코드가 많이 작성되었습니다. 이를 개선하기 위해 **리덕스를 사용**하여 해당 state가 필요한 컴포넌트에서만 사용할 수 있게 하였습니다.
+ 에디터로 사용한 React Quill Editor는 간단한 기능 구현에는 좋았으나 이미지를 업로드 하면 서버측에 base64로 저장된다는 것을 알았습니다. 그래서 이를 개선하고 싶었으나 서버 구현에 익숙지 않아서 개선하지 못하였습니다.
+ 또한 기존에 원했던 것은, **Node JS를 통해 자체 서버를 만들어서 MongoDB를 이용한 데이터 처리**였는데 리덕스와 MongoDB를 같이 사용함에 있어서 어려움을 겪었습니다. 해결하고 싶었으나 시간적 여유로 해결하지 못하였습니다. 더 학습하여 해당 프로젝트를 실제로 사용할 수 있게 배포하고 싶습니다.

### 🗂저작권
***
  + 해당 웹앱에 사용한 배경사진은 <https://pixabay.com/> 사이트를 이용하였습니다.
  + 해당 웹앱에 사용한 아이콘은 <https://www.flaticon.com/> 사이트를 이용하였습니다.
