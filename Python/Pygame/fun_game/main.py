import pygame
import pygame_menu
import sys
import pyautogui

pygame.init()
info = pygame.display.Info()
SIZE = WIDTH, HEIGHT = info.current_w, info.current_h

# flags = pygame.DOUBLEBUF | pygame.FULLSCREEN
mainsurface = pygame.display.set_mode(SIZE)
screen = pygame.Surface((800, 600))
screen.fill((0, 0, 0))
clock = pygame.time.Clock()

# Title Text
font = pygame.font.SysFont("Serif", 50)
text = "Pygame - Game"
main_title = font.render(text, True, pygame.Color("White"))

# light shade of the button
color_light = (170, 170, 170)

# dark shade of the button
color_dark = (100, 100, 100)

# Add a main menu ----------------------------------------------------
# menu = pygame_menu.Menu('Welcome', 400, 300,
#                       theme=pygame_menu.themes.THEME_BLUE)
# menu.add.text_input('Name :', default='John Doe')
# menu.add.button('Quit', pygame_menu.events.EXIT)
# menu.mainloop(mainsurface)
# --------------------------------------------------------------------

color_max = 255


def get_color(pos, val):
    switch = {
        0: WIDTH,
        1: HEIGHT
    }

    percent_screen = pos / switch[val]

    color = 255 * percent_screen

    return abs(color)


def draw_target():

    # define the x, y, width & height for the rectangle
    x_position = 300
    y_position = 300
    rect_width = 60
    rect_height = 60

    target = pygame.Rect(x_position, y_position, rect_width, rect_height)

    # draw the rectangle
    return target


while True:

    target_color = (255, 0, 0)
    curr_target = draw_target()

    # Grab current x, y of the mouse
    mouse_position = pyautogui.position()

    red = get_color(mouse_position[0], 0)
    blue = get_color(mouse_position[1], 1)

    # Prevents negatives
    green = abs((get_color(mouse_position[0], 0) - get_color(mouse_position[1],
                                                             1)))
    screen.fill((red, blue, green))

    for event in pygame.event.get():
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:
                pygame.quit()
                sys.exit()
    # Math say /8 is middle which is dope
    screen.blit(main_title, (WIDTH / 8, 0))
    mainsurface.blit(
        pygame.transform.scale(screen, (WIDTH, HEIGHT)),  # scale to full
        (0, 0))  # the position of the scaled screen

    pygame.draw.rect(mainsurface, target_color, curr_target)
    pygame.display.update()
