from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer


my_bot = ChatBot(name='PyBot', read_only=True,
				 logic_adapters=['chatterbot.logic.MathematicalEvaluation',
	'chatterbot.logic.BestMatch'])

small_talk = [
	'hi there!',
	'hi!',
	'how are you?',
	'i\'m cool.',
	'I\'m fine.',
	'sorry to hear that.',
	'not so good.'
]

math_talk_1 = [
	'pythagorean theorem',
	'a squared plus b squared equals c squared.'
]

math_talk_2 = [
	'law of cosines',
	'c**2 = a**2 + b**2 - 2 * a * b * cos(gamma)'
]

list_trainer = ListTrainer(my_bot)

for item in (small_talk, math_talk_1. math_talk_2):
	list_trainer.train(item)