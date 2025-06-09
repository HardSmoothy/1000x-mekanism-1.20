ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: "better_angel_ring:angel_ring" },
    "minecraft:nether_star",
    "minecraft:elytra"
  );

  event.shapeless("better_angel_ring:angel_ring", "doomangelring:angelring");

  event.remove({ output: "doomangelring:angelring" });
});
