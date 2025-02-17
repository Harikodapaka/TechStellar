import ReactMarkdown from 'react-markdown';
import { Container, Image, Text, Title } from '@mantine/core';
import classes from './LegalPageHeader.module.css';

type LegalPageHeaderProps = {
  title: string;
  image: any;
  description: any;
};

export function LegalPageHeader({ title, description, image }: LegalPageHeaderProps) {
  return (
    <Container size="xl">
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title} order={2}>
            {title}
          </Title>
          <Text fz="md" mb={5} component="div">
            <ReactMarkdown>{description}</ReactMarkdown>
          </Text>
        </div>
        <Image src={image.url} alt="idea image" className={classes.image} />
      </div>
    </Container>
  );
}
