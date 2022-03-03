import React from 'react';
import {
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    Box,
    Typography,
    ListSubheader,
    Grid,
    Hidden,
    useTheme,
    Switch
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';
import Apps from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import AddCircle from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.dark,
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
        height: 27,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none',
    },
    menuIcon: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(1),
    },
    icons: {
        marginRight: theme.spacing(2),
    },
    grow: {
        flexGrow: 1,
    },
    listItemText: {
        fontSize: 14,
    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4,
    },
    subheader: {
        textTransform: 'uppercase',
    }
}));

const videos = [
    {
        id: 1,
        title:
            'Quem são os 11 representantes que negociam em nome de...',
        channel: 'CNN Brasil',
        views: '29 mil visualizações',
        date: 'há 1 hora',
        avatar: '/images/avatar-cnn.jpg',
        thumb: '/images/thumb1.jpg',
    },
    {
        id: 2,
        title:
            'Rússia e Ucrânia voltam a discutir cessar-fogo',
        channel: 'Record News',
        views: '8,7 mil visualizações',
        date: 'há 1 hora',
        avatar: '/images/avatar-record-news.jpg',
        thumb: '/images/thumb2.jpg',
    },
    {
        id: 3,
        title:
            'Delegações de Rússia e Ucrânia retomam negociações em...',
        channel: 'Poder360',
        views: '3,9 mil visualizações',
        date: 'há 1 hora',
        avatar: '/images/avatar-poder360.jpg',
        thumb: '/images/thumb3.jpg',
    },
    {
        id: 4,
        title:
            'Rússia e Ucrânia se reúnem daqui a pouco em Belarus',
        channel: 'Band Jornalismo',
        views: '256 mil visualizações',
        date: 'há 1 horas',
        avatar: '/images/avatar-band.jpg',
        thumb: '/images/thumb4.jpg',
    },
    {
        id: 5,
        title:
            'Rússia e Ucrânia devem retomar conversas',
        channel: 'Jovem Pan News',
        views: '71 mil visualizações',
        date: 'há 3 horas',
        avatar: '/images/avatar-jovempan.jpg',
        thumb: '/images/thumb5.jpg',
    },
    {
        id: 6,
        title: 'O que devemos esperar para a 2ª rodada de negociações entre...',
        channel: 'Record News',
        views: '197 mil visualizações',
        date: 'há 6 horas',
        avatar: '/images/avatar-record-news.jpg',
        thumb: '/images/thumb6.jpg',
    },
    {
        id: 7,
        title:
            'Rússia e Ucrânia marcam nova rodada de negociações...',
        channel: 'CNN Brasil',
        views: '361 mil visualizações',
        date: 'há 21 horas',
        avatar: '/images/avatar-cnn.jpg',
        thumb: '/images/thumb7.jpg',
    },
    {
        id: 8,
        title:
            'As imagens da invasão da Rússia à Ucrânia',
        channel: 'BBC News Brasil',
        views: '1,6 mi de visualizações',
        date: 'há 5 dias',
        avatar: '/images/avatar-bbc.jpg',
        thumb: '/images/thumb8.jpg',
    },
];

function Home({ darkMode, setDarkMode }) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <AppBar color="inherit" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuIcon} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <img src={theme.palette.type === 'dark' ? '/images/youtube-branco.png' : '/images/youtube-preto.png'}
                        className={classes.logo} alt="Logo"/>
                    <div className={classes.grow}></div>
                    <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} className={classes.icons}/>
                    <IconButton className={classes.icons}>
                        <VideoCall />
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <Apps />
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <MoreVert />
                    </IconButton>
                    <Button startIcon={<AccountCircle />} color="secondary" variant="outlined">Fazer Login</Button>
                </Toolbar>
            </AppBar>

            <Box display="flex">
                <Hidden mdDown>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <Toolbar />
                        <div className={classes.drawerContainer}>
                            <List>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }}
                                        primary={'Início'} />
                                </ListItem>

                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }}
                                        primary={'Em alta'} />
                                </ListItem>

                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<Whatshot />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }}
                                        primary={'Inscrições'} />
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }}
                                        primary={'Biblioteca'} />
                                </ListItem>

                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<History />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }}
                                        primary={'Histórico'} />
                                </ListItem>
                            </List>
                            <Divider />
                            <Box p={8}>
                                <Typography variant="body2">
                                    Faça login para curtir vídeos, comentar e se inscrever.
                                </Typography>
                                <Box mt={2}>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        startIcon={<AccountCircle />}>
                                        Fazer Login
                                    </Button>
                                </Box>
                            </Box>
                            <Divider />
                            <List
                                component='nav'
                                aria-labelledby='nested-list-subheader'
                                subheader={
                                    <ListSubheader
                                        component='div'
                                        id='nested-list-subheader'
                                        className={classes.subheader}
                                    >
                                        O melhor do YouTube
                                    </ListSubheader>
                                }
                            >
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Música'}
                                    />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Esportes'}
                                    />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Jogos'}
                                    />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Filmes'}
                                    />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Notícias'}
                                    />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Ao vivo'}
                                    />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Destaques'}
                                    />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Videos 360'}
                                    />
                                </ListItem>
                            </List>
                            <Divider />
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemText,
                                    }}
                                    primary={'Procurar Mais'}
                                />
                            </ListItem>
                            <Divider />
                        </div>
                    </Drawer>
                </Hidden>

                <Box p={8}>
                    <Toolbar />
                    <Typography
                        variant="h5"
                        color="textPrimary"
                        style={{ fontWeight: 600 }}
                    > Recomendados
                    </Typography>

                    <Grid container spacing={4}>
                        {
                            videos.map((item, index) => (
                                <Grid item lg={3} md={4} sm={6} xs={12}>
                                    <Box mt={2}>
                                        <img style={{ width: '100%' }}
                                            alt={item.title}
                                            src={item.thumb}
                                        />
                                        <Box display="flex" mt={2}>
                                            <img style={{ width: '13%', height: '13%', borderRadius: '100%', marginRight: 10 }}
                                                alt={item.channel}
                                                src={item.avatar} />
                                            <Box>
                                                <Typography
                                                    style={{ fontWeight: 600 }}
                                                    gutterBottom
                                                    variant="body1"
                                                    color="textPrimary"
                                                >{item.title}</Typography>
                                                <Typography
                                                    display="block"
                                                    variant="body2"
                                                    color="textSecondary"
                                                >{item.channel}</Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                >{`${item.views} • ${item.date}`}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default Home;