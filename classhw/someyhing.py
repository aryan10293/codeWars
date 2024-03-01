def main():
    win = GraphWin("Rectangle with Circles", 800, 800)
    win.setBackground('white')


    x_cord = 100
    y_cord = 300
    play = True
    lebron = Rectangle(Point(x_cord, x_cord), Point(y_cord, y_cord))
    lebron.setFill("purple")
    lebron.draw(win)
    
    prev_circle = None
    
    while play:
        click_point = win.getMouse()
        print(click_point)

        if prev_circle:
            prev_circle.undraw()

        x = click_point.getX()
        y = click_point.getY()

        if (x < x_cord or x > y_cord ) or (y < x_cord or y > y_cord ):
            play = False
        else:
            circle = Circle(Point(x, y), 20) 
            circle.setFill("white")  
            print(x,y)
            circle.draw(win)
            prev_circle = circle
main()