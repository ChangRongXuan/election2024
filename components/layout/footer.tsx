import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { color, breakpoint } from '~/styles/theme';

const FooterTop = styled.section`
  background-color: ${color.blue};
  padding: 20px 17px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoint.md} {
    padding: 32px 0;
    padding-left: calc((100vw - 286px / 2));
    padding-right: calc((100vw - 286px / 2));
  }

  ${breakpoint.xl} {
    padding: 22px 0 30px 0;
    padding-left: calc((100vw - 1120px / 2));
    padding-right: calc((100vw - 1120px / 2));
    flex-direction: row;
    align-items: center;
    position: relative;
  }
`;

const TopLeft = styled.div`
  flex-direction: column;
  align-items: center;
  display: none;
  outline: 1px solid white;

  ${breakpoint.xl} {
    display: flex;
  }
`;

const Logo = styled(Image)`
  border: 4px solid red;
  ${breakpoint.md} {
    display: none;
  }
`;

const SocialList = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    padding: 14px 8px;
  }
`;

const TopMiddle = styled.div`
  margin: 20px 0 0 0;
  ${breakpoint.xl} {
    margin: 0 0 0 48px;
    flex: 1;
  }
`;

const InfoWrapper = styled.ul`
  color: white;
  font-size: 14px;
  line-height: 2;
  letter-spacing: 0.5px;
`;

const InfoItem = styled.li`
  display: flex;
  justify-content: center;
`;

const TopRight = styled.div`
  padding: 20px 0 0 0;
  color: white;
  font-size: 14px;
  line-height: 2;
  letter-spacing: 0.5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  position: relative;
  margin-top: 20px;
  ${breakpoint.xl} {
    margin: 0;
    padding: 0 0 0 20px;
    border-left: 1px solid white;
    max-width: inherit;
  }

  &::before {
    content: '';
    background: white;
    position: absolute;
    max-width: 254px;
    height: 1px;
    width: 100vw;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    ${breakpoint.xl} {
      display: none;
    }
  }
`;

const MobileIcons = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  a {
    padding: 14px 8px;
  }
  ${breakpoint.xl} {
    margin-top: 8px;
  }
  ${breakpoint.xl} {
    display: none;
  }
`;

const FooterBottom = styled.section`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${breakpoint.md} {
    padding: 32px 0;
    padding-left: calc((100vw - 286px / 2));
    padding-right: calc((100vw - 286px / 2));
  }
  ${breakpoint.xl} {
    padding: 20px 0;
  }
`;

const Copyright = styled.p`
  color: ${color.blue};
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${breakpoint.xl} {
    color: ${color.blue};
    flex-direction: row;
    span + span {
      margin: 0 0 0 5px;
    }
  }
`;

const YoutubeTos = styled.p`
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #4a4a4a;
  padding: 8px 21px 0 21px;
  margin: 0 0 12px;
  a {
    color: ${color.blue};
  }
`;

const SocialLink = styled(Link)`
  display: block;
  width: 22px;
  height: 22px;
  position: relative;
`;

export default function Header(): JSX.Element {
  const FOOTER_LEFT_LIST: { href: string; type: string; imgSrc: string }[] = [
    {
      href: 'https://www.facebook.com/mnewstw',
      imgSrc: 'facebook-logo.svg',
      type: 'facebook',
    },
    {
      href: 'https://lin.ee/4XsO8xi',
      imgSrc: 'line-logo.png',
      type: 'line',
    },
    {
      href: 'https://www.instagram.com/mnewstw',
      imgSrc: 'instagram-logo.svg',
      type: 'instagram',
    },
    {
      href: 'https://twitter.com/mnews_tw',
      imgSrc: 'twitter-logo.svg',
      type: 'twitter',
    },
  ];
  const FOOTER_RIGHT_LIST: { href: string; text: string }[] = [
    { href: '/schedule', text: '電視節目表' },
    {
      href: '/story/press-self-regulation',
      text: '新聞自律',
    },
    { href: '/story/channel', text: '頻道位置' },
    { href: '/story/privacy', text: '隱私權政策' },
    { href: '/story/webauthorization', text: '內容授權' },
    {
      href: '/story/announce',
      text: '公告專區',
    },
    { href: '/story/adsales', text: '整合行銷' },
  ];

  return (
    <footer>
      <FooterTop>
        <TopLeft>
          <Logo
            src='/logo-white.svg'
            className='logo'
            alt='MNews'
            width='150'
            height='28'
          />
          <SocialList>
            {FOOTER_LEFT_LIST.map((social) => {
              return (
                <SocialLink
                  key={social.type}
                  href={social.href}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <Image
                    src={'/' + social.imgSrc}
                    className='social-network-service-img'
                    alt={social.type}
                    width='22'
                    height='22'
                  />
                </SocialLink>
              );
            })}
          </SocialList>
        </TopLeft>
        <TopMiddle>
          <InfoWrapper>
            <InfoItem>
              <span>客服專線:</span>
              <span>(02)7752-5678</span>
            </InfoItem>
            <InfoItem>
              <span>客服信箱</span>
              <a href='mailto:mnews.cs@mnews.com.tw'>mnews.cs@mnews.com.tw</a>
            </InfoItem>
          </InfoWrapper>
        </TopMiddle>
        <TopRight>
          {FOOTER_RIGHT_LIST.map((item) => {
            return (
              <Link
                key={item.href}
                href={item.href}
                target='_blank'
                rel='noreferrer noopener'
              >
                {item.text}
              </Link>
            );
          })}
        </TopRight>
        <MobileIcons>
          {FOOTER_LEFT_LIST.map((social) => {
            return (
              <SocialLink
                key={social.type}
                href={social.href}
                target='_blank'
                rel='noreferrer noopener'
              >
                <Image
                  className='social-network-service-img'
                  src={'/' + social.imgSrc}
                  alt={social.type}
                  width='22'
                  height='22'
                />
              </SocialLink>
            );
          })}
        </MobileIcons>
      </FooterTop>
    </footer>
  );
}
