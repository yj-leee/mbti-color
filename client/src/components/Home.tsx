import { useEffect, useRef, useState } from "react";
import { ColorSurvey } from "./ColorSurvey";
import {
  Accent,
  AddItem,
  Container,
  Content,
  Filter,
  Header,
  Heading,
  Items,
  RemoveIcon,
} from "./HomeStyles";
import axios from "../lib/axios";

export interface Item {
  id: number;
  colorCode: string;
  mbti: string;
  createdAt: number;
  updatedAt: number;
}

function Home(): JSX.Element {
  const [items, setItems] = useState<Item[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  const nextPageRef = useRef<string | null>(null);
  const isLoadingRef = useRef<boolean>(false);

  async function handleLoad(mbti: string | null) {
    const res = await axios.get("color-surveys/", {
      params: { mbti, limit: 20 },
    });
    nextPageRef.current = res.data.next;
    const nextItems: Item[] = res.data.results;
    setItems(nextItems);
  }

  async function handleLoadNext() {
    if (nextPageRef.current) {
      console.log(nextPageRef.current);
      const res = await axios.get(nextPageRef.current);
      const data = res.data;
      setItems((prevItems) => [...prevItems, ...data.results]);
      nextPageRef.current = data.next;
    }
  }

  useEffect(() => {
    handleLoad(filter);
  }, [filter]);

  useEffect(() => {
    async function handleScroll() {
      if (!nextPageRef.current || isLoadingRef.current) return;
      isLoadingRef.current = true;
      const currentScrollBottom: number =
        window.innerHeight + document.documentElement.scrollTop;
      const maxScroll: number = document.documentElement.offsetHeight;
      if (currentScrollBottom >= maxScroll) {
        await handleLoadNext();
      }
      isLoadingRef.current = false;
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Container>
      <div>
        <Header>
          <Heading>
            MBTI별
            <br />
            <Accent>좋아하는 컬러</Accent>
          </Heading>
          {filter && (
            <Filter onClick={() => setFilter(null)}>
              {filter}
              <RemoveIcon src="images/x.svg" alt="필터 삭제" />
            </Filter>
          )}
        </Header>
      </div>
      <Content>
        <AddItem to="/new">+ 새 컬러 등록하기</AddItem>
        <Items>
          {items.map((item) => (
            <li key={item.id}>
              <ColorSurvey value={item} onClick={() => setFilter(item.mbti)} />
            </li>
          ))}
        </Items>
      </Content>
    </Container>
  );
}

export default Home;
