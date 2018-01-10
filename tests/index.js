const exec = require("child_process").exec
const globby = require("globby")
const assert = require("assert")

// css globs
const passingCSSFiles = globby.sync(["tests/fixtures/**/pass/*.css"])
const failingCSSFiles = globby.sync(["tests/fixtures/**/fail/*.css"])

// scss globs
const passingSCSSFiles = globby.sync(["tests/fixtures/**/pass/*.scss"])
const failingSCSSFiles = globby.sync(["tests/fixtures/**/fail/*.scss"])

// css tests
passingCSSFiles.forEach(passingCSSFilename => {
  it(`${passingCSSFilename} should pass linting`, done => {
    exec(`npx stylelint "${passingCSSFilename}" --config index.js`, (err, stdout, stderr) => {
      if (err) {
        console.error(err.stack)
        console.error(stdout.toString())
        console.error(stderr.toString())
        done(err)
        return
      }
      done()
    })
  })
})

failingCSSFiles.forEach(failingCSSFilename => {
  it(`${failingCSSFilename} should not pass linting`, done => {
    exec(`npx stylelint "${failingCSSFilename} --config index.js`, (err, stdout, stderr) => {
      assert(err)
      console.log(stdout)
      done()
    })
  })
})

// scss tests
passingSCSSFiles.forEach(passingSCSSFilename => {
  it(`${passingSCSSFilename} should pass linting`, done => {
    exec(`npx stylelint "${passingSCSSFilename}" --config scss.js`, (err, stdout, stderr) => {
      if (err) {
        console.error(err.stack)
        console.error(stdout.toString())
        console.error(stderr.toString())
        done(err)
        return
      }
      done()
    })
  })
})

failingSCSSFiles.forEach(failingSCSSFilename => {
  it(`${failingSCSSFilename} should not pass linting`, done => {
    exec(`npx stylelint "${failingSCSSFilename} --config scss.js`, (err, stdout, stderr) => {
      assert(err)
      console.log(stdout)
      done()
    })
  })
})
