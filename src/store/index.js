import { createSlice, configureStore } from "@reduxjs/toolkit";

let initialState = [
  {
    id: 0,
    listTitle: "[영화] 큐어",
    title: "큐어",
    category: "movie",
    director: "구로사와 기요시",
    writer: "",
    publisher: "",
    readDate: null,
    casting: "야쿠쇼 코지, 하기와라 마사토",
    genre: "스릴러",
    releaseDate: "1997-12-27",
    watchDate: "2023-12-16",
    ratings: 5,
    content:
      "《큐어》(キュア, Cure, Kyua)는 일본에서 제작된 구로사와 기요시 감독의 1997년 범죄, 스릴러 영화이다. 야쿠쇼 코지 등이 주연으로 출연하였고 이케다 테츠야 등이 제작에 참여하였다. 2012년 대한민국의 영화 감독 봉준호는 이 영화를 역대 최고의 영화 중 하나로 언급했다.",
  },
  {
    id: 1,
    listTitle: "[드라마] 브레이킹 배드",
    title: "브레이킹 배드",
    category: "drama",
    director: "빈스 길리건",
    writer: "빈스 길리건, 피터 굴드, 조지 매스트라스, 피터 린",
    publisher: "",
    readDate: null,
    casting: "브라이언 크랜스턴, 아론 폴, 안나 건 외",
    genre: "범죄",
    releaseDate: "1997-12-27",
    watchDate: "2024-01-16",
    ratings: 3,
    content: `《브레이킹 배드》(Breaking Bad)는 빈스 길리언이 감독 및 제작하고 AMC에서 방영한 미국 범죄 드라마이다. 2008년 1월 20일에 방영이 시작됐으며 2013년 9월 29일에 총 62편으로 구성된 다섯 시즌으로 종영됐다. "Breaking Bad"라는 제목은 미국 남부의 구어체로 '지옥을 일으키자' 혹은 '막가자'라는 뜻을 담았다.`,
  },
  {
    id: 2,
    listTitle: "[책] 완전한 행복",
    title: "완전한 행복",
    category: "book",
    director: "",
    writer: "정유정",
    publisher: "은행나무",
    readDate: "2023-11-25",
    casting: "",
    genre: "소설",
    releaseDate: "",
    watchDate: "",
    ratings: 5,
    content: `『내 인생의 스프링 캠프』 『내 심장을 쏴라』 『7년의 밤』 『28』 『종의 기원』 『진이, 지니』. 발표하는 작품마다 독자들의 열광적인 지지를 받으며 한국문학의 대체불가한 작가로 자리매김한 정유정이 신작 『완전한 행복』으로 돌아왔다. 500여 쪽을 꽉 채운 압도적인 서사와 적재적소를 타격하는 속도감 있는 문장, 치밀하고 정교하게 쌓아올린 플롯과 독자의 눈에 작열하는 생생한 묘사로 정유정만의 스타일을 가감 없이 보여주는 한편, 더 완숙해진 서스펜스와 인간의 심연에 대한 밀도 높은 질문으로 가득 찬 수작이다.`,
  },
];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    replacePost(state, action) {
      return action.payload;
    },
    editPost(state, action) {
      return [
        action.payload,
        ...state.filter((d) => d.id !== action.payload.id),
      ];
    },
    addPost(state, action) {
      return [...state, action.payload];
    },
    deletePost(state, action) {
      return state.filter((d) => d.id !== action.payload.id);
    },
  },
});

const store = configureStore({
  reducer: postSlice.reducer,
});

export const postActions = postSlice.actions;

export default store;
