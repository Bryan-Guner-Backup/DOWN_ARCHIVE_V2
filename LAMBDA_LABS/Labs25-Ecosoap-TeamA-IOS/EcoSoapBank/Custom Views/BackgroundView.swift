//
//  BackgroundView.swift
//  EcoSoapBank
//
//  Created by Shawn Gee on 8/15/20.
//  Copyright © 2020 Spencer Curtis. All rights reserved.
//

import UIKit
import SwiftUI

class BackgroundView: UIView {
    override init(frame: CGRect) {
        super.init(frame: frame)
        setUp()
    }
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        setUp()
    }
    
    private func setUp() {
        let gradient = configure(GradientView()) {
            $0.colors = [UIColor.esbGreen.orAdjustingBrightness(by: -0.4),
                         UIColor.downyBlue.orAdjustingBrightness(by: -0.4)]
            $0.startPoint = CGPoint(x: 0.2, y: 0.8)
            $0.endPoint = CGPoint(x: 0.4, y: -0.3)
        }
        addSubviewsUsingAutolayout(gradient)
        gradient.fillSuperview()
        
        let circles = BackgroundCirclesView()
        addSubviewsUsingAutolayout(circles)
        circles.fillSuperview()
    }
}

private struct Circle {
    enum Style {
        case dark, light
    }
    
    let style: Style
    let relativeCenter: CGPoint
    let relativeWidth: CGFloat
}

private class BackgroundCirclesView: UIView {
    private var circles: [Circle] = [
        Circle(style: .dark,
               relativeCenter: CGPoint(x: -0.02, y: 0.25),
               relativeWidth: 0.75),
        Circle(style: .dark,
               relativeCenter: CGPoint(x: 1.3, y: 0.1),
               relativeWidth: 1.2),
        Circle(style: .light,
               relativeCenter: CGPoint(x: 0.15, y: 0.08),
               relativeWidth: 0.25),
        Circle(style: .light,
               relativeCenter: CGPoint(x: 0.64, y: 0.02),
               relativeWidth: 0.4),
        
    ]

    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        super.traitCollectionDidChange(previousTraitCollection)

        if traitCollection.userInterfaceStyle != previousTraitCollection?.userInterfaceStyle {
            setNeedsDisplay()
        }
    }
    
    override func draw(_ rect: CGRect) {
        guard let context = UIGraphicsGetCurrentContext() else { return }
        let greenColor = UIColor(red: 45 / 255, green: 155 / 255, blue: 115 / 255, alpha: 40 / 100)
            .orAdjustingBrightness(by: -0.3)
            .cgColor
        let blueColor = UIColor(red: 46 / 255, green: 210 / 255, blue: 247 / 255, alpha: 55 / 100)
            .orAdjustingBrightness(by: -0.3)
            .cgColor
        
        circles.forEach {
            let diameter = $0.relativeWidth * frame.width
            let radius = diameter / 2
            let circleFrame = CGRect(x: ($0.relativeCenter.x * frame.width) - radius,
                                     y: ($0.relativeCenter.y * frame.height) - radius,
                                     width: diameter,
                                     height: diameter)

            let circlePath = CGPath(ellipseIn: circleFrame, transform: nil)
            context.addPath(circlePath)

            switch $0.style {
            case .light:
                context.setFillColor(blueColor)
                context.setBlendMode(.softLight)
            case .dark:
                context.setFillColor(greenColor)
                context.setBlendMode(.multiply)
            }

            context.fillPath()
        }
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setUp()
    }
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        setUp()
    }
    
    private func setUp() {
        backgroundColor = .clear
    }
}

// MARK: - Shade

extension UIView {
    static var shade: UIView {
        configure(UIView()) {
            $0.backgroundColor = UIColor.systemBackground.withAlphaComponent(0.2)
        }
    }
}

// MARK: - SwiftUI

struct BackgroundViewWrapper: UIViewRepresentable {
    func makeUIView(context: UIViewRepresentableContext<BackgroundViewWrapper>) -> UIView {
        BackgroundView()
    }
    
    func updateUIView(_ uiView: BackgroundViewWrapper.UIViewType, context: UIViewRepresentableContext<BackgroundViewWrapper>) {
    }
}

struct ViewWrapper_Previews: PreviewProvider {
    static var previews: some View {
        BackgroundViewWrapper().edgesIgnoringSafeArea(.all)
    }
}
