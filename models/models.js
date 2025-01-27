const sequelize = require('../db')
const {Sequelize, DataTypes} = require('sequelize')
const User = sequelize.define('users',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    tn:{type:DataTypes.STRING,unique:true},
    name:{type:DataTypes.TEXT},
    login:{type:DataTypes.STRING,unique:true},
    email:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING},
    avatar:{type:DataTypes.TEXT},
    admin:{type:DataTypes.BOOLEAN,defaultValue: false},
    checked:{type:DataTypes.BOOLEAN,defaultValue: false},
    phone:{type:DataTypes.STRING},
    unit:{type:DataTypes.INTEGER},
    developer_id:{type:DataTypes.INTEGER,allowNull:true}
})
const Token = sequelize.define('token',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    user_id:{type:DataTypes.INTEGER,ref:'users'},
    device_token:{type:DataTypes.TEXT},
    refresh_token:{type:DataTypes.TEXT,require:true}
})

const Skills = sequelize.define('skills',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.TEXT},
    days:{type:DataTypes.TEXT},
    info:{type:DataTypes.TEXT},
    trash:{type:DataTypes.BOOLEAN,defaultValue:false}
})
const Developers = sequelize.define('developers',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING},
    group:{type:DataTypes.INTEGER},
    trash:{type:DataTypes.BOOLEAN,defaultValue:false}
})

const SkillDeveloper = sequelize.define('SkillDeveloper', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const Documents = sequelize.define('documents',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING},
    file:{type:DataTypes.STRING},
    user_id:{type:DataTypes.INTEGER,ref:'users'},
    skill_id:{type:DataTypes.INTEGER,ref:'skills'},
    trash:{type:DataTypes.BOOLEAN,defaultValue:false}
})

User.belongsTo(Developers, { foreignKey: 'developer_id', as: 'developers' });
Developers.hasMany(User, { foreignKey: 'developer_id', as: 'users' });

Skills.belongsToMany(Developers, { through: 'SkillDeveloper' });
Developers.belongsToMany(Skills, { through: 'SkillDeveloper' });

// Связывание модели промежуточной таблицы с Skills и Developers
Skills.belongsToMany(Developers, { through: SkillDeveloper });
Developers.belongsToMany(Skills, { through: SkillDeveloper });

Skills.hasMany(Documents, { foreignKey: 'skill_id', as: 'documents' });
Documents.belongsTo(Skills, { foreignKey: 'skill_id', as: 'skill' });

const News = sequelize.define('news',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.TEXT
    },
    desc: {
        type: DataTypes.TEXT
    },
    text: {
        type: DataTypes.JSONB, // Хранение массива строк
        allowNull: false,
        defaultValue: [] // По умолчанию пустой массив
    },
    public: {
        type: DataTypes.JSONB, // Хранение массива объектов
        allowNull: false,
        defaultValue: [] // По умолчанию пустой массив
    },
    image: {
        type: DataTypes.TEXT
    },
    imagefull: {
        type: DataTypes.TEXT
    },
    newsDateTime: {
    // Новое поле для даты и времени новости
        type: DataTypes.DATE,
        allowNull: true,
    },
    publishDateTime: {
        // Новое поле для даты и времени публикации
        type: DataTypes.DATE,
        allowNull: true,
    },
})

const Sites = sequelize.define('sites',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.TEXT},
    desc:{type:DataTypes.TEXT},
    image:{type:DataTypes.TEXT}
})

const AUPs = sequelize.define('aup',{
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    firstname: {type: DataTypes.TEXT},
    secondname: {type: DataTypes.TEXT},
    lastname: {type: DataTypes.TEXT},
    developers: {type: DataTypes.TEXT},
    email: {type: DataTypes.TEXT},
    image: {type: DataTypes.TEXT},
    priory: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
})
const VakCompanies = sequelize.define('vakcompanies',{
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    name: {type: DataTypes.TEXT},
    category: {type: DataTypes.TEXT}
})
const Vakansii = sequelize.define('vakansii',{
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    name: {type: DataTypes.TEXT},
    respon: {
        type: DataTypes.JSONB, // Хранение массива строк
        allowNull: false,
        defaultValue: [] // По умолчанию пустой массив
    },
    requierments: {
        type: DataTypes.JSONB, // Хранение массива строк
        allowNull: false,
        defaultValue: [] // По умолчанию пустой массив
    },
    conditions: {
        type: DataTypes.JSONB, // Хранение массива строк
        allowNull: false,
        defaultValue: [] // По умолчанию пустой массив
    },
    keyskills: {
        type: DataTypes.JSONB, // Хранение массива строк
        allowNull: false,
        defaultValue: [] // По умолчанию пустой массив
    },
    open: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    company: {type: DataTypes.TEXT},
    email: {type: DataTypes.TEXT},
})

const About = sequelize.define('about',{
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    text: {type: DataTypes.TEXT},
    company: {type: DataTypes.TEXT}
})

const GroupsComs = sequelize.define('groupscoms',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT
    },
    number: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    desc: {
        type: DataTypes.TEXT
    },
    contacts: {
        type: DataTypes.JSONB, // Хранение массива строк
        allowNull: false,
        defaultValue: [] // По умолчанию пустой массив
    },
    site: {
        type: DataTypes.TEXT
    },
    logo: {
        type: DataTypes.TEXT
    },
    image: {
        type: DataTypes.TEXT
    }
})

const Activities = sequelize.define('activities',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    line: {
        type: DataTypes.TEXT
    },
    name: {
        type: DataTypes.TEXT
    },
    desc: {
        type: DataTypes.TEXT
    },
    url: {
        type: DataTypes.TEXT
    }
})

const PacksKids = sequelize.define('packskids',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    capter: {  //раздел (hopekids или др
        type: DataTypes.TEXT
    },
    name: {
        type: DataTypes.TEXT
    },
    image: {
        type: DataTypes.TEXT
    },
    time: {
        type: DataTypes.TEXT
    },
    publicdesc: {
        type: DataTypes.TEXT
    },
    desc: {
        type: DataTypes.JSONB, // Хранение массива строк
        allowNull: false,
        defaultValue: [] // По умолчанию пустой массив
    },
    price: {
        type: DataTypes.TEXT
    },
    priory: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    priory: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
})
const GalleryImages = sequelize.define('gallery',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    capter: {  //раздел (hopekids или др
        type: DataTypes.TEXT
    },
    image: {
        type: DataTypes.TEXT
    }
})

const ContactsPage = sequelize.define('contactspage',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    capter: {  //раздел (hopekids или др
        type: DataTypes.TEXT
    },
    city: {
        type: DataTypes.TEXT
    },
    phone: {
        type: DataTypes.JSONB, // Хранение массива строк
        allowNull: false,
        defaultValue: [] // По умолчанию пустой массив
    },
    adress: {
        type: DataTypes.JSONB, // Хранение массива строк
        allowNull: false,
        defaultValue: [] // По умолчанию пустой массив
    },
    email: {
        type: DataTypes.JSONB, // Хранение массива строк
        allowNull: false,
        defaultValue: [] // По умолчанию пустой массив
    },
    mapw: {
        type: DataTypes.TEXT
    },
    maph: {
        type: DataTypes.TEXT
    },
    ok: {
        type: DataTypes.TEXT
    },
    vk: {
        type: DataTypes.TEXT
    },
    instagram: {
        type: DataTypes.TEXT
    },
    telegram: {
        type: DataTypes.TEXT
    },
    youtube: {
        type: DataTypes.TEXT
    },
    more: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: []
    }
})


const ZonesPage = sequelize.define('zonespage',{
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    name: {type: DataTypes.TEXT},
    desc: {type: DataTypes.TEXT},
    capter: {type: DataTypes.TEXT},
    priory:  {type: DataTypes.TEXT},
    mainimg: {type: DataTypes.TEXT},
    maindesc: {type: DataTypes.TEXT},
    firstimg: {type: DataTypes.TEXT},
    firstdesc: {type: DataTypes.TEXT},
    secondimg: {type: DataTypes.TEXT},
    seconddesc: {type: DataTypes.TEXT},
    lastimg: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: []
    },
})

const ZonesSlider = sequelize.define('zonesslider',{
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    name: {type: DataTypes.TEXT},
    desc: {type: DataTypes.TEXT},
    capter: {type: DataTypes.TEXT},
    priory:  {type: DataTypes.TEXT},
    image: {type: DataTypes.TEXT},
})

const MobileApp = sequelize.define('mobileapp',{
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    android: {type: DataTypes.TEXT},
    apple: {type: DataTypes.TEXT},
    capter: {type: DataTypes.TEXT},
})


const Advantages = sequelize.define('advantages',{
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    onename: {type: DataTypes.TEXT},
    onedesc: {type: DataTypes.TEXT},
    twoname: {type: DataTypes.TEXT},
    twodesc: {type: DataTypes.TEXT},
    threename: {type: DataTypes.TEXT},
    threedesc: {type: DataTypes.TEXT},
    fourname: {type: DataTypes.TEXT},
    fourdesc: {type: DataTypes.TEXT},
    fivename: {type: DataTypes.TEXT},
    fivedesc: {type: DataTypes.TEXT},
    sixname: {type: DataTypes.TEXT},
    sixdesc: {type: DataTypes.TEXT},
    capter: {type: DataTypes.TEXT},
})

const OurTrainers = sequelize.define('ourtrainers',{
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    name: {type: DataTypes.TEXT},
    stazh: {type: DataTypes.TEXT},
    desc: {type: DataTypes.TEXT},
    room: {type: DataTypes.TEXT},
    group: {type: DataTypes.TEXT},
    image: {type: DataTypes.TEXT},
    capter: {type: DataTypes.TEXT},
})

const GroupTrainers = sequelize.define('grouptrainers',{
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    name: {type: DataTypes.TEXT},
    desc: {type: DataTypes.TEXT},
    capter: {type: DataTypes.TEXT},
})

const ProgramTrain = sequelize.define('programtrain',{
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    name: {type: DataTypes.TEXT},
    desc: {type: DataTypes.TEXT},
    room: {type: DataTypes.TEXT},
    image: {type: DataTypes.TEXT},
    capter: {type: DataTypes.TEXT},
})
const ProgramSlider = sequelize.define('programslider',{
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    name: {type: DataTypes.TEXT},
    room: {type: DataTypes.TEXT},
    image: {type: DataTypes.TEXT},
    capter: {type: DataTypes.TEXT},
})


const PricesAvia = sequelize.define('pricesavia',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    capter: {
        type: DataTypes.TEXT
    },
    name: {
        type: DataTypes.TEXT
    },
    description: {
        type: DataTypes.TEXT
    },
    priceour: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: []
    },
    priceyour: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: []
    },
    time: {
        type: DataTypes.TEXT
    },
    theory: {
        type: DataTypes.TEXT
    },
    practice: {
        type: DataTypes.TEXT
    },
    programs: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: []
    },
    discounts: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: []
    },
    priory: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
})

const ProgramLessons = sequelize.define('programslessons',{
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    name: {type: DataTypes.TEXT},
    desc: {type: DataTypes.TEXT},
    capter: {type: DataTypes.TEXT},
})
const TeachersAvia = sequelize.define('teachersavia',{
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    name: {type: DataTypes.TEXT},
    capter: {type: DataTypes.TEXT},
    dev: {type: DataTypes.TEXT},
    desc: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: []
    },
    photo: {type: DataTypes.TEXT},
    priory: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
})
const LearnTheory = sequelize.define('learntheory',{
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    capter: {type: DataTypes.TEXT},
    learn: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: []
    },
    theory: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: []
    }
})

module.exports = {
    User,Token,Skills,Developers,SkillDeveloper,Documents,News, Sites,AUPs,VakCompanies,Vakansii,About,GroupsComs,Activities,PacksKids,GalleryImages,ContactsPage,
    ZonesPage,ZonesSlider,MobileApp,Advantages,OurTrainers,ProgramTrain,ProgramSlider,GroupTrainers,PricesAvia,ProgramLessons,TeachersAvia,LearnTheory
}