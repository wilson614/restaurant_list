const express = require('express')
const passport = require('passport')
const router = express.Router()
const User = require('../../models/user')

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login',
  failureFlash: true
}))

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  const errors = []
  if (!email || !password || !confirmPassword) {
    errors.push({ message: '請再次確認必填欄位！' })
  }
  if (password !== confirmPassword) {
    errors.push({ message: '兩次輸入的密碼不相符！' })
  }
  if (errors.length) {
    return res.render('register', { name, email, password, confirmPassword, errors })
  }
  User.findOne({ email })
    .then(user => {
      if (user) {
        errors.push({ message: '此信箱已註冊！' })
        res.render('register', { name, email, password, confirmPassword, errors })
      } else {
        User.create({
          name,
          email,
          password
        })
          .then(() => res.redirect('/'))
          .catch(error => console.log(error))
      }
    })
})

router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', '你已成功登出！')
  res.redirect('/users/login')
})

module.exports = router
