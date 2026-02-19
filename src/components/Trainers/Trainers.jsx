import AnimatedSection from '../shared/AnimatedSection'
import TelegramButton from '../shared/TelegramButton'
import styles from './Trainers.module.css'

const features = [
  'Client management',
  'Training insights',
  'Progress tracking',
  'Session history',
]

export default function Trainers() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <AnimatedSection as="div">
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            For trainers
          </div>
        </AnimatedSection>

        <AnimatedSection as="h2" className={styles.headline} delay={0.05}>
          Built for trainers, too.
        </AnimatedSection>

        <AnimatedSection as="p" className={styles.subtitle} delay={0.1}>
          Manage your clients, track their progress, and get training insights
          — all from one place. GymText gives trainers the tools to deliver
          better results without the admin overhead.
        </AnimatedSection>

        <AnimatedSection as="ul" className={styles.features} delay={0.15}>
          {features.map((f) => (
            <li key={f} className={styles.feature}>
              <span className={styles.featureDot} />
              {f}
            </li>
          ))}
        </AnimatedSection>

        <AnimatedSection as="div" delay={0.2}>
          <TelegramButton href="https://gymtext.app">
            Open GymText
          </TelegramButton>
        </AnimatedSection>
      </div>
    </section>
  )
}
