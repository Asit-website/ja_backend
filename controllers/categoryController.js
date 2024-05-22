const Category = require("../models/Category");

const postCategory = async ({ Name }) => {
    try {
        const category = new Category({
            Name
        });
        const savedCategory = await category.save();
        return { status: true, message: 'new category created', data: savedCategory };
    }
    catch (error) {
        console.log(error);
        return {
            status: false,
            message: "500"
        }
    }
}

const getCategory = async () => {
    let data = await Category.find();
    return {
        status: true,
        // data,
        data: [{
            id: 1,
            name: "JA Biztown",
            imgUrl: "https://jadisccovery.s3.amazonaws.com/categroies/Image+1.png",
            option:[]
        },

        {
            id: 2,
            name: "JA Finance Park",
            imgUrl: "https://jadisccovery.s3.amazonaws.com/categroies/Image%202.png",
            option: [{
                id: 1,
                name: "WELCOME",
                suboption: [
                    { id: 1, name: "Getting started with your digital learning assistant", videoUrl: "" },
                    {
                        id: 2, name: "Personal banking", personalOption: [{
                            id: 1,
                            name: "Deposit Slip",
                            videoUrl: ""
                        }, {
                            id: 2,
                            name: "Check",
                            videoUrl: ""
                        }, {
                            id: 3,
                            name: "Direct Deposit",
                            videoUrl: ""
                        }]
                    },
                ],
            },

            //    ==============2nd option========

            {
                id: 2,
                name: "BUSINESS START-UP",
                suboption: [
                    {
                        id: 1, name: "Completing Your bizprep documents", personalOption: [{
                            id: 1,
                            name: "Business Cost Sheets",
                            videoUrl: ""
                        }, {
                            id: 2,
                            name: "Loan Application",
                            videoUrl: ""
                        },
                        {
                            id: 3,
                            name: "Marketing Plan",
                            videoUrl: ""
                        },
                        {
                            id: 4,
                            name: "Bulletin Ad",
                            videoUrl: ""
                        },
                        {
                            id: 5,
                            name: "Webpage Ad",
                            videoUrl: ""
                        },
                        {
                            id: 6,
                            name: "Television Ad",
                            videoUrl: ""
                        }
                    ]
                    },
                    { id: 2, name: "Technology Equipment/Navigating the simulation", videoUrl:"" },
                    { id: 3, name: "Job Duties and Responsibilities", videoUrl:"" },
                ],
            }

            ,

            // ==================3rd option=============

            {
                id: 3,
                name: "MEETING AND ROTATIONS",
                suboption: [
                    {
                        id: 1, name: "STAFF MEETING", personalOption: [{
                            id: 1,
                            name: "CEO Speeches",
                            videoUrl: ""
                        }, {
                            id: 2,
                            name: "Placing Orders",
                            videoUrl: ""
                        },
                        {
                            id: 3,
                            name: "Marketing Plan",
                            videoUrl: ""
                        },
                    ]
                    },
                    { id: 2, name: "DURING FIRST BREAK", personalOption:[
                        {
                           id:1,
                           name:"Visiting Bank",
                           videoUrl:""
                        },
                        {
                            id:2,
                           name:"Lunch",
                           videoUrl:"" 
                        },
                        {
                            id:3,
                           name:"Voting",
                           videoUrl:"" 
                        }
                ]  },
                    { id: 3, name: "TIME TO WORK", videoUrl:"" },
                ],
            },

            // ====================4th option=============

            {
                id: 4,
                name: "STAFF MEETING : MARKETPLACE",
                suboption: [
                    {
                        id: 1, name: "STAFF MEETING", personalOption: [{
                            id: 1,
                            name: "Ready to Sell",
                            videoUrl: ""
                        }, {
                            id: 2,
                            name: "POS System Setup",
                            videoUrl: ""
                        },
                        {
                            id: 3,
                            name: "Pricing",
                            videoUrl: ""
                        },
                    ]
                    },
                    { id: 2, name: "DURING SECOND BREAK", personalOption:[
                        {
                           id:1,
                           name:"Visiting Bank",
                           videoUrl:""
                        },
                        {
                            id:2,
                           name:"Shopping",
                           videoUrl:"" 
                        },
                ]  },
                    
                ],
            },

            // ============5th option===========

            {
                id: 5,
                name: "BUSINESS CLOSEOUT",
                suboption: [
                    {
                        id: 1, name: "CLOSEOUT & CLEANUP", personalOption: [{
                            id: 1,
                            name: "Bank Loan & Bills",
                            videoUrl: ""
                        }, {
                            id: 2,
                            name: "Earning Statement",
                            videoUrl: ""
                        },
                        {
                            id: 3,
                            name: "Clean-Up",
                            videoUrl: ""
                        },
                    ]
                    },
                    { id: 2, name: "CLOSING TOWN HALL MEETING", personalOption:[
                        {
                           id:1,
                           name:"CEO Speech",
                           videoUrl:""
                        },
                ]  },
                    
                ],
            }


            ],
        },

        {
            id: 3,
            name: "JA Finance Park : Advanced",
            imgUrl: "https://jadisccovery.s3.amazonaws.com/categroies/Image+3.png",
            option:[]
        },

        ],

    };
};

module.exports = {
    postCategory,
    getCategory
}