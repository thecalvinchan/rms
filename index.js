var quotes = [
  "Sharing is good, and with digital technology, sharing is easy.",
  "If you want to accomplish something in the world, idealism is not enough - you need to choose a method that works to achieve the goal.",
  "Proprietary software tends to have malicious features. The point is with a proprietary program, when the users don't have the source code, we can never tell. So you must consider every proprietary program as potential malware.",
  "Facebook is not your friend, it is a surveillance engine.",
  "I suppose many people will continue moving towards careless computing, because there's a sucker born every minute.",
  "Free software is software that respects your freedom and the social solidarity of your community. So it's free as in freedom.",
  "Android is very different from the GNU/Linux operating system because it contains very little of GNU. Indeed, just about the only component in common between Android and GNU/Linux is Linux, the kernel.",
  "With paper printed books, you have certain freedoms. You can acquire the book anonymously by paying cash, which is the way I always buy books. I never use a credit card. I don't identify to any database when I buy books. Amazon takes away that freedom.",
  "CD stores have the disadvantage of an expensive inventory, but digital bookshops would need no such thing: they could write copies at the time of sale on to memory sticks, and sell you one if you forgot your own.",
  "The computer industry is the only industry that is more fashion-driven than women's fashion.",
  "In essence, Chrome OS is the GNU/Linux operating system. However, it is delivered without the usual applications, and rigged up to impede and discourage installing applications.",
  "The idea of copyright did not exist in ancient times, when authors frequently copied other authors at length in works of non-fiction. This practice was useful, and is the only way many authors' works have survived even in part.",
  "Fighting patents one by one will never eliminate the danger of software patents, any more than swatting mosquitoes will eliminate malaria.",
  "Anything that prevents you from being friendly, a good neighbour, is a terror tactic.",
  "People sometimes ask me if it is a sin in the Church of Emacs to use vi. Using a free version of vi is not a sin; it is a penance. So happy hacking.",
  "Value your freedom or you will lose it, teaches history. 'Don't bother us with politics', respond those who don't want to learn.",
  "All governments should be pressured to correct their abuses of human rights.",
  "Whether gods exist or not, there is no way to get absolute certainty about ethics. Without absolute certainty, what do we do? We do the best we can.",
  "I could have made money this way, and perhaps amused myself writing code. But I knew that at the end of my career, I would look back on years of building walls to divide people, and feel I had spent my life making the world a worse place.",
  "If you use a proprietary program or somebody else's web server, you're defenceless. You're putty in the hands of whoever developed that software.",
  "Android is a major step towards an ethical, user-controlled, free-software portable phone, but there is a long way to go.",
  "Officially, MPAA stands for Motion Picture Association of America, but I suggest that MPAA stands for Malicious Power Attacking All.",
  "Also, because schools must teach the spirit of goodwill, the habit of helping others around you, every class should have this rule: students, if you bring software to class you may not keep it for yourself.",
  "The paradigm of competition is a race: by rewarding the winner, we encourage everyone to run faster. When capitalism really works this way, it does a good job; but its defenders are wrong in assuming it always works this way.",
  "The reason that a good citizen does not use such destructive means to become wealthier is that, if everyone did so, we would all become poorer from the mutual destructiveness.",
  "When I launched the development of the GNU system, I explicitly said the purpose of developing this system is so we can use our computers and have freedom, thus if you use some other free system instead but you have freedom, then it's a success. It's not popularity for our code but it's success for our goal.",
  "The desire to be rewarded for one's creativity does not justify depriving the world in general of all or part of that creativity.",
  "In the free/libre software movement, we develop software that respects users' freedom, so we and you can escape from software that doesn't.",
  "If programmers deserve to be rewarded for creating innovative programs, by the same token they deserve to be punished if they restrict the use of these programs.",
  "Control over the use of one's ideas really constitutes control over other people's lives; and it is usually used to make their lives more difficult.",
  "Proprietary software is an injustice.",
  "There is nothing wrong with wanting pay for work, or seeking to maximize one's income, as long as one does not use means that are destructive.",
  "If ebooks mean that readers' freedom must either increase or decrease, we must demand the increase.",
  "Software patents are dangerous to software developers because they impose monopolies on software ideas.",
  "In practice, the copyright system does a bad job of supporting authors, aside from the most popular ones. Other authors' principal interest is to be better known, so sharing their work benefits them as well as readers.",
  "In the US, you even lose legal rights if you store your data in a company's machines instead of your own. The police need to present you with a search warrant to get your data from you; but if they are stored in a company's server, the police can get it without showing you anything.",
  "One reason you should not use web applications to do your computing is that you lose control.",
  "The interesting thing about cloud computing is that we've redefined cloud computing to include everything that we already do.",
  "Facebook collects a lot of data from people and admits it. And it also collects data which isn't admitted. And Google does too. As for Microsoft, I don't know. But I do know that Windows has features that send data about the user.",
  "If there is a Like button in a page, Facebook knows who visited that page. And it can get IP address of the computer visiting the page even if the person is not a Facebook user."
]

module.exports = function () { 
  return quotes[Math.floor(Math.random() * quotes.length)]
}

module.exports.quotes = quotes
