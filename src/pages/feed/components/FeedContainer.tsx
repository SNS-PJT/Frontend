import styled from 'styled-components'
import FeedFooter from './FeedFooter';
import FeedHeader from './FeedHeader';
import { Flex } from '@/styles/container';

export type feedItem = 
    {
      feedId: number;
      username: string;
      imgURL: string;
      content: string;
    }
  
  

interface FeedContainerProps{
    feedItems: feedItem[];
}

const FeedContainer:React.FC<FeedContainerProps> = ({feedItems}) => {
  return (
    <S.Container $column $alignCenter>
      {feedItems ? (
          feedItems.map((feed, feedId) => (
            <S.FeedItemContainer $column key={feedId}>
              <FeedHeader username={feed.username}/>
              <img src={feed.imgURL} width={"100%"} draggable="false"/>
              <FeedFooter username={feed.username} content={feed.content}/>
            </S.FeedItemContainer >
          ))
        ) : (
          <S.NoFeedContainer>피드에 표시할 항목이 없습니다.</S.NoFeedContainer>
        )}
    </S.Container>
  )
}

const S = {
  Container: styled(Flex)`
    padding: 1rem 0 1rem 0;
    height: auto;
    gap: 2rem;
  `, 
  FeedItemContainer: styled(Flex)`
    width: 100%;
    gap: 0.1rem;
  `,
  NoFeedContainer: styled.div`
    width: 100%;
  `
}
export default FeedContainer
