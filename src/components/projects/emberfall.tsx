import { ContentData } from "./type";
import SideBySide from "./side-by-side-item";
import TextWrapper from "../text-wrapper";
import TextBlock from "./text-block";

export default function Emberfall() {
  const emberfall: ContentData[] = [
    {
      src: "/images/emberfall-title.png",
      alt: "Emberfall title image",
      heading: "What is Emberfall",
      text: "Emberfall is a 2D tower-defense-inspired game that I started working on together with a friend. We agreed that he would handle the graphics while I focused on the programming. \n\nThe original idea was inspired by some custom games in Warcraft III that we played as kids. The original idea was simple: each player would have a base and send units against each other in a multiplayer battle. As the project evolved, we decided to take it in a different direction. Instead of multiplayer, we made it into a tower-defense-inspired game where you defend against increasingly difficult waves of enemies by building units and towers. \n\nWe chose Unity for a few reasons. I had worked with C# during my studies and enjoyed it, so I wanted an opportunity to refresh and expand those skills. We also wanted to use an established game engine, and after looking at the available options, Unity seemed like the most well-rounded choice for what we wanted to build.\n\nThe goal was to actually finish and ship an app and have something published on an app store. As it turned out, the project would go on to teach me much more about what goes into building a larger project — from architecture and data-driven UI to save-file migrations, data normalization, and much more.",
      imageSize: "tall",
    },
    {
      src: "/images/the-beginning.png",
      alt: "Prototype image",
      heading: "The Beginning",
      text: "When I started development, we had envisioned Emberfall as a multiplayer game where two players would send units against each other, with the first player to destroy the enemy castle winning. As I developed the prototype and we discussed the ideas further, however, the concept started to evolve, and we eventually decided to take it in a different direction: a single-player, tower-defense-inspired game.\n\nThe idea for the first prototype was simple: spawn some units, have them fight each other, and set a win condition based on destroying the enemy castle. The execution was another story.\n\nEven this simple prototype required quite a few different components. Each unit was represented by a Unity prefab made up of different components and scripts responsible for things like movement, targeting and combat. For this post, I want to highlight three of those components: the target, movement and combat components.\n\nAll three have changed quite a bit since the early prototype, and I expect them to keep evolving as the complexity of the game grows. One of the things I have been paying more attention to throughout development is keeping the runtime cost of these systems low, so that there is still room for the game to grow without performance becoming a problem.\n\nMore importantly, I have been trying to keep the different systems loosely coupled(some went better than others). As the project has grown, this has become increasingly important. It makes it easier to change or replace individual systems without having to rewrite large parts of the game, and it gives me more flexibility as new mechanics are introduced.",
      imageSize: "tall",
    },
    {
      src: "/images/example-range.png",
      alt: "Two units range illustrated",
      heading: "Targeting",
      text: "The first component I want to look at is the Target Component. As the name suggests, its responsibility is to find and maintain a target for the unit.\n\nEach unit has a detection range, with a standard distance (blue) or the unit's attack range, (red) whichever is bigger. When searching for targets, the component uses Unity's physics system to find nearby colliders. I use a ContactFilter2D with Unity layers to only detect units belonging to the opposing team, reducing the number of colliders that need to be processed. The results are also stored in a preallocated buffer with a limited size, avoiding unnecessary allocations every time a unit searches for a target.\n\nOnce the possible targets have been found, they are passed to a separate TargetSelector. The TargetSelector is responsible for deciding which target is the best choice based on the unit's targeting priorities. This keeps the responsibility of finding targets separate from the logic that decides which target should actually be selected.\n\nUnity, like most game engines, has a lifecycle for its components. For this system I initially used Update(), which runs once per frame. With potentially hundreds of units on the battlefield, having every unit perform a physics query every frame quickly became unnecessarily expensive.\n\nInstead, I introduced a retarget interval. The component still uses Update(), but it only performs a target search when the interval has elapsed. This significantly reduces how often the more expensive parts of the targeting system need to run.",
      imageSize: "tall",
    },
    {
      src: "/images/flowchart-movement.png",
      alt: "Movement components flowchart",
      heading: "Movement",
      text: "The Movement Component is another system that started out relatively simple but has grown considerably as new gameplay requirements were introduced.\n\nOriginally, its responsibility was straightforward: give a unit a destination and move its Rigidbody2D towards it by setting its velocity. As more units were added to the battlefield, however, some problems started to appear.\n\nOne of the most noticeable problems was that units could get stuck behind other units from the same team. Instead of forming a smooth line towards their destination, they could end up blocking each other.\n\nTo address this, I added a separation system. When another unit from the same team is very close, the movement direction is adjusted to encourage the units to slide past each other rather than continuing directly into one another. I use a small overlap query with a reusable Collider2D buffer to find nearby units, and then calculate a separation vector based on their positions.\n\nThe system has also had to account for different types of units. Ranged units have a rally point where they should position themselves, while melee units have a different rally point. Later, I added the ability to give a unit a forced destination, which takes priority over its normal movement behaviour.\n\nAs these different movement rules accumulated, simply telling the unit to 'move towards its target' was no longer enough. I ended up separating the decision of *where the unit should go* from the logic that actually moves it.",
      imageSize: "tall",
    },
    {
      src: "none-combat",
      alt: "none-combat",
      heading: "Combat",
      text: "The Combat Component is the component that has stayed closest to its original implementation. Its responsibility is to handle a unit's combat: managing the cooldown between attacks, checking whether the current target is within attack range, and triggering the appropriate attack when both conditions are met.\n\nThe basic flow is fairly simple. Each frame, the component updates the attack cooldown and checks the current target from the Target Component. If there is a living target, it calculates the distance to that target and compares it to the unit's attack range, also taking the target's hit radius into account. If the target is in range and the attack cooldown has expired, the unit attacks and the cooldown is reset. The Combat Component also determines whether the unit should continue moving. When the target is within attack range, movement is disabled; otherwise, the Movement Component is allowed to continue.\n\nThe actual attack behaviour currently depends on what type of unit is attached to the component. For example, a ranged unit uses its RangedShooter component to fire a projectile, while a normal unit deals its damage directly to the target. Special units such as the Sapper have their own behaviour, such as triggering an explosion when they attack.This is one of the areas I already know needs to be refactored. The Combat Component currently has to know about specific unit implementations in order to decide how an attack should be performed. Every time I introduce another special type of attack, this can potentially mean adding another condition to the Combat Component.\n\nDuring the next refactor I want to move towards a more generic way of handling attacks, where the Combat Component can simply tell the unit to perform its attack without needing to know exactly how that attack works. This should make it easier to add new attack types without continuously increasing the complexity of the Combat Component.",
      imageSize: "tall",
    },
    {
      src: "/images/flowchart-unit.png",
      alt: "Flowchart for the unit",
      heading: "Summary",
      text: "Together, these three components form the core of a unit's behaviour:\n\nTarget Component — decides who the unit should engage.\nMovement Component — decides where the unit should move and handles getting there.\nCombat Component — decides when and how the unit attacks.\n\nKeeping these responsibilities separated makes each system easier to reason about and gives me a structure that can evolve as the game's complexity increases.",
      imageSize: "tall",
    },
  ];

  return (
    <div>
      <ul className="flex flex-col gap-12">
        <SideBySide data={emberfall[0]} index={0} key={emberfall[0].src} />
        <SideBySide data={emberfall[1]} index={1} key={emberfall[1].src} />
        <div>
          <SideBySide data={emberfall[2]} index={2} key={emberfall[2].src} />
          <TextWrapper>
            <p className="whitespace-pre-line">
              As the number of units on the battlefield increased, another
              problem emerged. Units could physically block units from the same
              faction, which could cause a unit to select a perfectly valid
              target but then become stuck trying to reach it. Because the
              target itself was still alive and within detection range, there
              was originally no reason for the unit to abandon it, even though
              there might be other valid targets nearby.
              <br />
              <br />
              I ended up using two separate checks to deal with this.
              <br />
              <br />
              The first is an engagement stall timer. If a unit keeps its target
              for too long without successfully attacking it, there is reason to
              believe that the target is no longer a good choice for that unit.
              The timer is reset whenever the unit successfully attacks, and if
              it exceeds the maximum allowed time, the unit searches for a new
              target.
              <br />
              <br />
              The second is target validation. Before keeping the current
              target, the component checks that the target is still alive and
              has not moved outside the unit&apos;s detection range.
              <br />
              <br />
              These checks run as part of the unit&apos;s regular update loop,
              alongside the periodic target searches.
              <br />
              <br />
              The targeting system has changed several times since the original
              prototype, and I expect it to continue changing as the game
              becomes more complex. What has remained important throughout those
              changes is keeping the responsibilities separated: the Target
              Component finds potential targets and maintains the current one,
              while the TargetSelector handles the decision of which target is
              preferable.
            </p>
          </TextWrapper>
        </div>
        <div>
          <SideBySide data={emberfall[3]} index={3} key={emberfall[3].src} />
          <TextWrapper>
            <p className="whitespace-pre-line">
              The ResolveDestination() method is responsible for this decision.
              It determines whether the unit should move towards a forced
              destination, a ranged rally point, its current combat target, a
              temporary retry position, or a fallback position. If none of these
              provide a valid destination, the unit simply stops.
              <br />
              <br />
              I also added &apos;stuck&apos; detection for situations where a
              unit is moving towards a destination but isn&apos;t making
              sufficient progress. If the unit remains &apos;stuck&apos; for
              long enough, it creates a temporary position and retries after a
              short delay. This gives the unit an opportunity to recover instead
              of remaining permanently &apos;stuck&apos;.
              <br />
              <br />
              At this point, the Movement Component has become considerably more
              complex than the original implementation. However, the complexity
              comes from having to resolve several different movement
              constraints before actually moving the unit. Keeping the
              destination resolution separate from the actual movement makes
              that complexity easier to reason about and gives me a single place
              to add new movement rules as the game continues to evolve. This
              complexity also makes me wonder if this component has taken on too
              many responsibilities.
            </p>
          </TextWrapper>
        </div>
        <TextBlock {...emberfall[4]} />
        <SideBySide data={emberfall[5]} index={5} key={emberfall[5].src} />
      </ul>
    </div>
  );
}
