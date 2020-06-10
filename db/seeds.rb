# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Comment.destroy_all

@user1 = User.create!({ username: 'admin', password: '123' })
@user2 = User.create!({ username: 'memer5000', password: 'abc' })

p "#{User.count} user(s) created"

@post1 = Post.create!(
  {
    user: @user1,
    title: 'I love Furret',
    content: 'Hello world, I love Furret very much. He is a very soft friend. He likes to walk. If you don\'t like Furret, I don\'t like you!'
  }
)

@post2 = Post.create!(
  {
    user: @user2,
    title: 'wheee',
    content: 'I am typing words I don\'t know what to write so I am just writing anything okay I like memes this is a run on sentence it\'s just placeholder anyway so it\'s not like it actually matters yeah.'
  }
)

p "#{Post.count} post(s) created"

@comment1 = Comment.create!(
  {
    user: @user1,
    post: @post1,
    content: 'Fun reminder: I love Furret so much, he is so soft. Stan Furret!!!'
  }
)

@comment2 = Comment.create!(
  {
    user: @user2,
    post: @post1,
    content: 'cupcake ipsum dolor sit amet'
  }
)

@comment1 = Comment.create!(
  {
    user: @user1,
    post: @post2,
    content: 'yeet'
  }
)

p "#{Comment.count} comment(s) created"
