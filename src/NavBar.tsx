import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, styled } from '@mui/material';

// type LinkButtonProps = {
//   isActive: boolean;
//   to: string;
// };
//
// const LinkButton: FC<LinkButtonProps> = ({ isActive, to }) => {
//   return <NavLink to={}
// };

const Links = [
  { label: 'Главный экран', to: '/main' },
  { label: 'Конференции', to: '/conferences' },
  { label: 'Документы', to: '/documents' },
  { label: 'Материалы', to: '/materials' },
];

const NavLinkStyled = styled(NavLink)`
  width: 215px;
  height: 53px;
  background: #BABABA;
  color: white;
  border-radius: 20px;
  font-size: 20px;
  line-height: 25px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLinkStyledActive = styled('div')`
  width: 215px;
  height: 53px;
  background: rgba(0, 0, 0, 0.53);
  color: white;
  border-radius: 20px;
  font-size: 20px;
  line-height: 25px;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavBar: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '70px',
      }}
    >
      {Links.map(({ label, to}) => {
        return (
          <NavLinkStyled key={to} to={to}>
            {({ isActive }) => {
              if (isActive) {
                return <NavLinkStyledActive>{label}</NavLinkStyledActive>
              } else {
                return <>{label}</>
              }
            }}
          </NavLinkStyled>
        )
      })}
    </Box>
  );
};
