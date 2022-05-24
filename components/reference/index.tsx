import Image from 'next/image';
import { List, Avatar } from 'antd';

const data = [
  {
    title:
      'Leveraging Passage Retrieval with Generative Models for Open Domain Question Answering (EACL 2021)',
    link: 'https://aclanthology.org/2021.eacl-main.74.pdf',
  },
  {
    title:
      'FiD-Ex: Improving Sequence-to-Sequence Models for Extractive Rationale Generation (ACL 2021)',
    link: 'https://aclanthology.org/2021.eacl-main.74.pdf',
  },
  {
    title:
      'An Information Bottleneck Approach for Controlling Conciseness in Rationale Extraction (EMNLP 2020)',
    link: 'https://aclanthology.org/2021.eacl-main.74.pdf',
  },
  {
    title: 'Learning to Faithfully Rationalize by Construction (ACL 2020)',
    link: 'https://aclanthology.org/2021.eacl-main.74.pdf',
  },
];

import * as S from './style';

const Reference = () => {
  return (
    <S.ReferenceContainer>
      <S.Title>Reference</S.Title>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<a href={item.link}>{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </S.ReferenceContainer>
  );
};

export default Reference;
