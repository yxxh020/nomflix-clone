import { useQuery } from "@tanstack/react-query";
import { getMovies, IGetMoviesResult } from "../api";
import styled from "styled-components";
import { makeImagePath } from "../utils";

const Wrapper = styled.div`
  background-color: black;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.9)
    ),
    url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  position: relative;
`;
const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.white.lighter};
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    width: 120px;
    height: 5px;
    background-color: ${(props) => props.theme.red};
    border-radius: 5px;
  }
`;
const Overview = styled.p`
  font-size: 28px;
  width: 50%;
  font-weight: 300;
  color: ${(props) => props.theme.white.darker};
  position: relative;
  top: -10px;
  margin: 20px 0;
  &:after {
    content: "";
    position: absolute;                 `;

function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>({
    queryKey: ["movies", "nowPlaying"],
    queryFn: getMovies,
  });

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading..</Loader>
      ) : (
        <>
          <Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
            <div>
              <button>Play</button>
              <button>My List</button>
            </div>
          </Banner>
        </>
      )}
    </Wrapper>
  );
}
export default Home;
