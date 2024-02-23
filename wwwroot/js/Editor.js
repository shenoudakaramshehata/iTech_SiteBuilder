const projectID = window.location.search.split('id=')[1];
if (projectID == undefined) {
    projectID == 0;
}
const editor = grapesjs.init({
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: '#gjs',
    // Get the content for the canvas directly from the element
    // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    fromElement: true,
    // Size of the editor
    // height: '300px',
    width: 'auto',
    // Disable the storage manager for the moment
    storageManager:
    {
        type: 'remote',
        stepsBeforeSave: 3,
        autosave: false,         // Store data automatically
        autoload: true,

        contentTypeJson: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
        headers: {
            'content-Type': 'application/json'
        },
        options: {

            remote:
            {
                urlStore: `/api/EditorApi/SaveProjectData`,
                urlLoad: `/api/EditorApi/LoadProjectData/${projectID}`,
                //urlDelete: 'https://localhost:7292/api/StoreManger/DeleteUserSite',
                // The `remote` storage uses the POST method when stores data but
                // the json-server API requires PATCH.
                fetchOptions: opts => (opts.method === 'POST' ? { method: 'POST' } : {}),
                ////// As the API stores projects in this format `{id: 1, data: projectData }`,
                ////// we have to properly update the body before the store and extract the
                ////// project data from the response result.
                onStore: (data, editor) => {
                    const pagesHtml = editor.Pages.getAll().map(page => {
                        const component
                            = page.getMainComponent();
                        return {
                            html: editor.getHtml({ component }),
                            css: editor.getCss({ component })
                        }
                    });
                    return { id: projectID, data, pagesHtml };
                },
                onLoad: result => result.data,

            }
        },


    },
    styleManager: {
        appendTo: "#styles-container",
        sectors:
            [
                {
                    name: 'General',
                    open: false,
                    buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'

                    ]
                },
                {
                    name: 'Flex',
                    open: false,
                    buildProps: ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'order', 'flex-basis', 'flex-grow', 'flex-shrink', 'align-self']
                },
                {
                    name: 'Dimension',
                    open: false,
                    buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
                },
                {
                    name: 'Typography',
                    open: false,
                    buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-shadow'],
                },
                {
                    name: 'Decorations',
                    open: false,
                    buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
                },
                {
                    name: 'Extra',
                    open: false,
                    buildProps: ['transition', 'perspective', 'transform'],
                },
            ],

    },
    layerManager: {
        appendTo: "#layers-container",
    },
    traitManager: {
        appendTo: "#trait-container",
    },
    // Avoid any default panel
    panels: { defaults: [] },
    deviceManager: {
        devices: [{
            id: 'desktop',
            name: 'Desktop',
            width: ''
        },
        {
            id: 'tablet',
            name: 'Tablet',
            width: '768px',
            widthMedia: '768px'
        },
        {
            id: 'mobile',
            name: 'Mobile',
            width: '320px',
            widthMedia: '480px'
        },

        ],
        defaultDevice: 'desktop'
    },
    blockManager: {
        appendTo: '#blocks',

    },
    plugins: [
        'gjs-blocks-basic',
        'grapesjs-plugin-forms',
        'grapesjs-preset-webpage',
        'grapesjs-tabs',
        'grapesjs-components-farmer',
        'gjs-plugin-ckeditor',
        'gjs-preset-newsletter',
        'customPlugin',
        'gjs-navbar',
        'grapesjs-tabs',
        'grapesjs-tooltip',
        'grapesjs-custom-code',
        'grapesjs-touch',
        'grapesjs-indexeddb',
        'grapesjs-firestore',
        'grapesjs-parser-postcss',
        'grapesjs-typed',

    ],
    pluginsOpts: {
        'gjs-plugin-ckeditor':
        {
            position: 'left',
            options: {
                language: "en,ar",
                //extraPlugins: "sourcedialog,justify,showblocks,colorbutton",
                removeButtons: "",
                format_tags: "p;h1;h2;h3;h4;h5;h6;pre",
                startupFocus: true,
                //extraAllowedContent: '*(*);*{*}', // Allows any class and any inline style
                allowedContent: true, // Disable auto-formatting, class removing, etc.
                //enterMode: CKEDITOR.ENTER_BR,
                uiColor: '#CCEAEE', // Inline editor color
                extraPlugins: 'sourcedialog,justify,showblocks,colorbutton,basicstyles,justify,dialogui,dialog,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,notification,button,toolbar,clipboard,panelbutton,panel,floatpanel,colorbutton,colordialog,templates,menu,contextmenu,copyformatting,div,resize,elementspath,enterkey,entities,popup,filetools,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,forms,format,horizontalrule,htmlwriter,iframe,wysiwygarea,image,indent,indentblock,indentlist,smiley,justify,menubutton,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastetext,pastefromword,preview,print,removeformat,save,selectall,showblocks,showborders,sourcearea,specialchar,scayt,stylescombo,tab,table,tabletools,tableselection,undo,lineutils,widgetselection,widget,notificationaggregator,uploadwidget,uploadimage,wsc',
                //extraPlugins: 'dialogui,dialog,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,notification,button,toolbar,clipboard,panelbutton,panel,floatpanel,colorbutton,colordialog,templates,menu,contextmenu,copyformatting,div,resize,elementspath,enterkey,entities,exportpdf,popup,filetools,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,forms,format,horizontalrule,htmlwriter,iframe,wysiwygarea,image,indent,indentblock,indentlist,smiley,justify,menubutton,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastetext,pastetools,pastefromgdocs,pastefromword,preview,print,removeformat,save,selectall,showblocks,showborders,sourcearea,specialchar,scayt,stylescombo,tab,table,tabletools,tableselection,undo,lineutils,widgetselection,widget,notificationaggregator,uploadwidget,uploadimage,wsc',
                toolbar:
                    [
                        ["Styles", "Font", "FontSize", "Format", "-", "Bold", "Italic", "Strike", "Underline", "Subscript", "Superscript", "RemoveFormat", "-", "NumberedList", "BulletedList", "-", "Outdent", "Indent", "-", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock", "-", "Link", "Unlink", "Anchor", "TextColor", "BGColor", "-", "ShowBlocks", "-", "Image", "Table", "-"]
                    ]

            }
        }
    },
    canvas:
    {
        styles:
            [
                "/External/css/bootstrap.css",
                "/External/style.css",
                '/External/css/dark.css',
                '/External/css/font-icons.css',
                '/External/css/animate.css',
                '/External/css/magnific-popup.css',
                '/External/css/custom.css',
                '/css/grapes.min.css',
                'https://use.fontawesome.com/releases/v5.8.2/css/all.css',
                'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
                'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css',
                'https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css',
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
                'https://fonts.googleapis.com/css?family=Lato',
                '/fraola/css/froala_blocks.css'
            ],
        scripts: [
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js',


        ]
    },
});



const um = editor.UndoManager;

///////////Actions////
//kt_app_toolbar_slider_value
document.getElementById("btnDeviceDesktop").addEventListener('click', event => { editor.setDevice("desktop") });
document.getElementById("btnDeviceTablet").addEventListener('click', event => { editor.setDevice("tablet") });
document.getElementById("btnDeviceMobile").addEventListener('click', event => { editor.setDevice("mobile") });
document.getElementById("preview").addEventListener('click', setPreview);
document.getElementById("fullScreen").addEventListener('click', setfullScreen);
document.getElementById("undo").addEventListener('click', setundo);
document.getElementById("redo").addEventListener('click', setredo);
document.getElementById("Clear").addEventListener('click', setClear);
document.getElementById("kt_app_toolbar_slider").addEventListener('click', setZoom);
document.getElementById("Visibility").addEventListener('click', setVisibility);

editor.Commands.add("set-device-desktop", {
    run: (editor) => editor.setDevice("desktop"),
});

editor.Commands.add("set-device-mobile", {
    run: (editor) => editor.setDevice("mobile"),
})

editor.Commands.add("set-device-tablet", {
    run: (editor) => editor.setDevice("tablet"),
})
function setPreview() {
    editor.runCommand('preview')
}


function setfullScreen() {
    editor.runCommand('fullscreen')
}

function setundo() {
    console.log("undo")
    um.undo();
}
function setredo() {
    console.log("redo")
    um.redo();
}
function setVisibility() {
    editor.runCommand('export-template')
}
function setClear() {
    console.log("clear")
    editor.DomComponents.clear();
}
function setZoom() {
    var zoomValu = document.getElementById("kt_app_toolbar_slider_value").innerHTML;
    var zoomLevel = parseInt(zoomValu);
    var ZoomPrec = zoomLevel * 10;
    console.log("Zoom =" + ZoomPrec)
    editor.Canvas.setZoom(ZoomPrec);
}

///////Start Pages Configs//////
let config = editor.Canvas.getConfig();


let stylesLinkStrings;
let arrayofStyles = []

stylesLinkStrings = "@Html.Raw(Model.stylesfiles)";

//console.log(stylesLinkStrings);
arrayofStyles = stylesLinkStrings.split("$@@");

arrayofStyles.forEach((e) => {
    config.styles.push(e)
});

let jsLinkStrings;
let arrayofJs = []


jsLinkStrings = "@Html.Raw(Model.jsfiles)";

//console.log(jsLinkStrings);

arrayofJs = jsLinkStrings.split("$@@");
arrayofJs.forEach((e) => {
    config.scripts.push(e)
});

let x = editor.getProjectData();

jQuery(document).ready(async function () {

    const storageManager = editor.StorageManager;
    const data = await storageManager.load();
    let y = editor.loadProjectData(data);

    ProjectData();

})


//load page Function
function ProjectData() {
    let projectData = editor.getProjectData();
    //console.log(typeof(x));
    //console.log(projectData);
    let projectDataPages = projectData.pages;

    //console.log(projectDataPages);

    let pageId = projectDataPages[0].id
    //console.log(pageId);

    let pageName = 'FirstPage1';

    let PagesList = document.getElementById("Pages");
    let PageSelected = editor.Pages.getSelected();
    for (let i = 0; i < projectDataPages.length; i++) {

        var option = document.createElement("option");
        option.text = projectDataPages[i].id;
        option.value = projectDataPages[i].id;
        if (PageSelected == projectDataPages[i].id) {
            option.selected = true;
        }
        option.setAttribute("id", projectDataPages[i].id);
        //option.attr("onclick", "getPage(this.id)");
        var select = document.getElementById("PagesDrowpDown");
        select.appendChild(option);
        PagesList.innerHTML += ` <div class="d-flex flex-stack py-4">
                                                                            <!--begin::Details-->
                                                                            <div class="d-flex align-items-center">
                                                                                <!--begin::Details-->
                                                                                <div class="ms-5">
                                                                                                    <a  class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2" onclick="getPage(this.id)" id="${projectDataPages[i].id}">${projectDataPages[i].id}</a>
                                                                                </div>
                                                                                <!--end::Details-->
                                                                            </div>
                                                                            <!--end::Details-->
                                                                            <!--begin::Lat seen-->
                                                                            <div class="d-flex justify-content-end flex-shrink-0">

                                                                                        <a  class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1" onclick="EditPage(this.id)" id="${projectDataPages[i].id}">
                                                                                    <i class="ki-duotone ki-pencil fs-2"><span class="path1"></span><span class="path2"></span></i>
                                                                                </a>

                                                                               <a  class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm" onclick="DeletePage(this.id)" id="${projectDataPages[i].id}">
                                                                                    <i class="ki-duotone ki-trash fs-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></i>
                                                                                </a>
                                                                            </div>
                                                                            <!--end::Lat seen-->
                                                                        </div>`
    }


    editor.Pages.select(pageId);

}

function getPage(pagename) {

    let pageManager = editor.Pages;
    //console.log(pageManager)
    pageManager.select(pagename);
    var select = document.getElementById("PagesDrowpDown").value = pagename;
    document.getElementById("select2-PagesDrowpDown-container").innerHTML = pagename;



}


function AddPage() {
    console.log("add Popup");
    $('#showAddModal').modal('show');

}
let projectData;

//Add Page
async function AddPostPage() {

    let PageName = document.getElementById("pageNameId");
    projectData = editor.getProjectData();
    let projectDataPages = projectData.pages;

    if (PageName.value == "") {
        alert("Page name must be filled out");
    }
    else {
        let projectDataPagesToUpper = projectDataPages.map(function (v) {
            console.log(v.id)
            return v.id.toUpperCase();
        });
        if (projectDataPagesToUpper.includes(PageName.value.toUpperCase())) {
            alert("This Page name Is Existed Aleady!");
        }


        else {
            let html = editor.getHtml();
            let css = editor.getCss();
            const newPage = editor.Pages.add({
                id: PageName.value,
                styles: css, // or a JSON of styles
                component: html
            });

            //projectData.pages.push(newPage);

            projectData = editor.getProjectData();
            const storedProjectData = await editor.store();

        }
    }


}


const InputPageTitleId = document.querySelector("#EditPageId");
const InputPageTitleName = document.querySelector("#PageTLENId");

function EditPage(PageId) {


    let pageManager = editor.Pages;
    //console.log(pageManager)
    pageManager.select(PageId);
    let PageSelected = editor.Pages.getSelected();
    console.log()
    if (PageSelected.id.toUpperCase() == "INDEX") {
        alert("Can Not Update The Name Of This Page Because it is The Main Page That Start Your Site");
    }
    else {
        $('#showEditModal').modal('show');
        InputPageTitleName.value = PageId;
    }


}

async function SavePage() {
    let PageSelected = editor.Pages.getSelected();
    let htmldata = editor.getHtml();
    let cssdata = editor.getCss();
    PageSelected.component = htmldata;
    PageSelected.styles = cssdata;
    const storedProjectData = await editor.store();

}

async function EditPostPage() {

    let PageName = InputPageTitleName.value
    projectData = editor.getProjectData();
    let projectDataPages = projectData.pages;
    if (PageName == "") {
        alert("Page name must be filled out");
    }
    else {
        let projectDataPagesToUpper = projectDataPages.map(function (v) {
            console.log(v.id)
            return v.id.toUpperCase();
        });
        if (projectDataPagesToUpper.includes(PageName.toUpperCase())) {
            alert("This Page name Is Existed Aleady!");
        }


        else {
            PageSelected.id = PageName;
            let htmldata = editor.getHtml();
            let cssdata = editor.getCss();
            PageSelected.component = htmldata;
            PageSelected.styles = cssdata;
            PageSelected.setName(PageName);
            PageSelected.attributes.id = PageName;

            //console.log(PageSelected);

            const storedProjectData = await editor.store();
        }
    }

}

function DeletePage(PageId) {
    let pageManager = editor.Pages;
    pageManager.select(PageId);
    $('#deleteRecordModal').modal('show');

}

async function DeletePostPage() {

    let PageSelected = editor.Pages.getSelected();
    let PageName = PageSelected.id;
    if (PageName.toUpperCase() == "INDEX") {
        alert("Can Not Delete This Page Because it is The Main Page That Start Your Site");
    }
    else {
        let PageName = PageSelected.id;
        const removedPage = editor.Pages.remove(PageName);
        const storedProjectData = await editor.store();
    }


}



// Define the custom form submission block component
const customFormSubmissionBlock = {
    id: 'custom-form-submission',
    label: 'Custom Form Submission',
    content: `
                                                    <form id="custom-form">
                                                      <input type="text" id="name" name="name" required>
                                                      <button type="submit">Submit</button>
                                                    </form>
                                                  `,
    category: 'Forms',
};

// Register the custom component with the block manager
editor.BlockManager.add(customFormSubmissionBlock);

// Listen for the 'component' event to handle button clicks
editor.on('component:add', component => {
    if (component.get('tagName') === 'BUTTON') {
        component.getEl().onclick = handleButtonClick;
    }
});

// Function to handle button click
function handleButtonClick(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;

    // Perform form validation if needed

    // Custom logic for handling the button click event
    console.log('Submitted Name:', name);
}

function RedirectToSitePublish() {
    var SiteName = document.getElementById("SiteNId").value;
    //var DomainName = document.getElementById("SiteDId").value;
    var Url = document.getElementById("UrlId").value;
    //if (DomainName != undefined) {
    //    window.location.href = Url + "/" + DomainName;

    //} else {
        window.location.href = Url + "/" + SiteName;

    //}


}