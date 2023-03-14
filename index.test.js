const { loadHtml, loadStylesSheet, loadRootFiles, loadPagesFiles, findFoldersInDir } = require('./dom');

const dom = loadHtml("./index.html").trim();
const stylesSheet = loadStylesSheet().trim();
const rootFiles = loadRootFiles();
const pages = loadPagesFiles();
const folders = findFoldersInDir();

console.log("*********", folders);


describe('Project file structure', function () {
    test('contains index.html', function () {
        expect(rootFiles).toContain('index.html')
    })
    test('contains style.css', function () {
        expect(rootFiles).toContain('style.css')
    })
    test('contains pages folder', function () {
        expect(rootFiles).toContain('pages')
    })
    test('contains assets folder', function () {
        expect(rootFiles).toContain('assets')
    })
    test('pages folder has 3 html files', function () {
        expect(pages.every((file) => file.includes('.html'))).toBe(true)
    })
    /*   test('contains script.js', function () {
          expect(rootFiles).toContain('script.js')
      }) */
});



describe('Tests in index.html', function () {

    test('has header tag', function () {
        expect(dom.includes('<header')).toEqual(true);
        expect(dom.includes('</header')).toEqual(true);
    });

    test('has main tag', function () {
        expect(dom.includes('<main')).toEqual(true);
        expect(dom.includes('</main>')).toEqual(true);
    });
    test('has footer tag', function () {
        expect(dom.includes('<footer')).toEqual(true);
        expect(dom.includes('</footer>')).toEqual(true);
    });
    test('has section tag', function () {
        expect(dom.includes('<section')).toEqual(true);
        expect(dom.includes('</section>')).toEqual(true);
    });
    test('has article tag', function () {
        expect(dom.includes('<article')).toEqual(true);
        expect(dom.includes('</article>')).toEqual(true);
    });
    test('<br> not used', function () {
        expect(dom.includes('<br>')).toBe(false)
    });
    test('has a favicon link', function () {
        expect(dom.includes('<link rel="shortcut icon"')).toEqual(true);
        expect(dom.includes('type="image/x-icon"')).toEqual(true);
        //test there s a .ico file
    });
});

if (rootFiles.includes('pages')) {
    pages.forEach(page => {
        let pageDom = loadHtml("./pages/" + page);
        describe(`Tests in ${page}`, function () {

            test('has header tag', function () {
                expect(pageDom.includes('<header')).toEqual(true);
                expect(pageDom.includes('</header')).toEqual(true);
            });
            test('has main tag', function () {
                expect(pageDom.includes('<main')).toEqual(true);
                expect(pageDom.includes('</main>')).toEqual(true);
            });
            test('has footer tag', function () {
                expect(pageDom.includes('<footer')).toEqual(true);
                expect(pageDom.includes('</footer>')).toEqual(true);
            });
            test('<br> not used', function () {
                expect(dom.includes('<br>')).toBe(false)
            });
            /* test('has section tag', function () {
                expect(pageDom.includes('<section')).toEqual(true);
                expect(pageDom.includes('</section>')).toEqual(true);
            });
            test('has article tag', function () {
                expect(pageDom.includes('<article')).toEqual(true);
                expect(pageDom.includes('</article>')).toEqual(true);
            }); */
        });
    })
};



describe('Styles', function () {
    test('css is linked', function () {
        expect(stylesSheet.includes('<link rel="stylesheet" href="./style.css">'))
    });
    test('uses normalize.css', function () {
        expect(stylesSheet.includes('<link rel="stylesheet" href="normalize.css">'))
    });
    test('uses up to 2 stylesheets', function () {
        //TO DO filter .css files and check it is equal or less than 2 and greater than 0
    });
    test('uses ids', function () {
        expect(stylesSheet.includes('#')).toEqual(true);
    });
    test('uses classes', function () {
        expect(stylesSheet.includes('.')).toEqual(true);
    });
    test('uses :hover', function () {
        expect(stylesSheet).toEqual(expect.stringContaining(':hover'));
    });
    test('uses :checked', function () {
        expect(stylesSheet).toEqual(expect.stringContaining(':checked'));
    });
    test('uses :active', function () {
        expect(stylesSheet).toEqual(expect.stringContaining(':active'));
    });
    test('no inline styles', function () {
        expect(dom.includes(' style="')).toBe(false)
    });
    test('uses flexbox', function () {
        expect(stylesSheet).toEqual(expect.stringContaining('display: flexbox;'))
    });
    test('Mobile first - use media queries', function () {
        expect(stylesSheet.includes("@media (min-width:")).toEqual(true);
    });
});

















//CHECK project folders
//CHECK project names
//Incluye algún script?

//selectores están ordenados


//no hay mas de 2 hojas de estilo, incluyendo normalize

//incluye video y audio




//if carpeta styles


//if not carpeta styles



