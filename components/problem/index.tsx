import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/Link';
import LogoImage from 'public/logo.jpg';
import * as S from './style';

const Problem = () => {
  const [active, setActive] = useState(false);
  const activeHandler = () => {
    setActive(!active);
  };
  return (
    <S.DemoContainer>
      <S.DemoTitle>Demo</S.DemoTitle>
      <S.ProblemBox>
        <S.Problem>Directions</S.Problem>
        <S.ProblemText>
          <S.ProblemSpan>Q. </S.ProblemSpan>
          LanguageTool is your intelligent writing assistant for all common
          browsers and word processors. Write or paste your text here too have
          it checked continuously?
        </S.ProblemText>
      </S.ProblemBox>
      <S.ReadingBox>
        <S.Reading>Reading Passage</S.Reading>
        <S.ReadingText>
          Hemingway App makes your writing bold and clear. The app highlights
          lengthy, complex sentences and common errors; if you see a yellow
          sentence, shorten or split it. If you see a red highlight, your
          sentence is so dense and complicated that your readers will get lost
          trying to follow its meandering, splitting logic — try editing this
          sentence to remove the red. You can utilize a shorter word in place of
          a purple one. Mouse over them for hints. Adverbs and weakening phrases
          are helpfully shown in blue. Get rid of them and pick words with
          force, perhaps. Phrases in green have been marked to show passive
          voice. You can format your text with the toolbar. Paste in something
          you're working on and edit away. Or, click the Write button and
          compose something new.
        </S.ReadingText>
      </S.ReadingBox>
      <S.AnswerContainer>
        <S.AnswerTitle>Writing</S.AnswerTitle>
        {active ? (
          <S.AnswerArea>
            <S.AnswerBox>
              <S.ReadingText>
                Hemingway App makes your writing bold and clear. The app
                highlights lengthy, complex sentences and common errors; if you
                see a yellow sentence, shorten or split it. If you see a red
                highlight, your sentence is so dense and complicated that your
                readers will get lost trying to follow its meandering, splitting
                logic — try editing this sentence to remove the red. You can
                utilize a shorter word in place of a purple one. Mouse over them
                for hints. Adverbs and weakening phrases are helpfully shown in
                blue. Get rid of them and pick words with force, perhaps.
                Phrases in green have been marked to show passive voice. You can
                format your text with the toolbar. Paste in something you're
                working on and edit away. Or, click the Write button and compose
                something new.
              </S.ReadingText>
            </S.AnswerBox>
            <S.TutoringBox>
              <S.AnswerTutoringSpan>
                The app highlights lengthy, complex sentences and common errors;
              </S.AnswerTutoringSpan>
              <S.AnswerSpan>
                if you see a yellow sentence, shorten or split it.
              </S.AnswerSpan>
              <S.AnswerSpan>
                If you see a red highlight, your sentence is so dense and
                complicated that your
              </S.AnswerSpan>
              <S.AnswerSpan>
                readers will get lost trying to follow its meandering, splitting
                logic
              </S.AnswerSpan>
              <S.AnswerSpan>
                try editing this sentence to remove the red.
              </S.AnswerSpan>
              <S.AnswerSpan>
                You can utilize a shorter word in place of a purple one.
              </S.AnswerSpan>
              <S.AnswerSpan>Mouse over them for hints.</S.AnswerSpan>
              <S.AnswerSpan>
                Adverbs and weakening phrases are helpfully shown in blue.
              </S.AnswerSpan>
              <S.AnswerSpan>
                Get rid of them and pick words with force, perhaps.
              </S.AnswerSpan>
              <S.AnswerSpan>
                Phrases in green have been marked to show passive voice.
              </S.AnswerSpan>
              <S.AnswerSpan>
                You can format your text with the toolbar.
              </S.AnswerSpan>
              <S.AnswerTutoringSpan2>
                Paste in something you're working on and edit away. Or, click
                the Write button and compose something new.
              </S.AnswerTutoringSpan2>
            </S.TutoringBox>
          </S.AnswerArea>
        ) : (
          <S.AnswerInputBox>
            <S.AnswerInput />
            <S.SubmitButton onClick={activeHandler}>Submit</S.SubmitButton>
          </S.AnswerInputBox>
        )}
      </S.AnswerContainer>
    </S.DemoContainer>
  );
};

export default Problem;
